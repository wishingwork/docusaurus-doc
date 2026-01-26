export const config = {
    matcher: ['/attraction/:path*'],
};

export default async function middleware(request: Request) {
    const userAgent = request.headers.get('user-agent') || '';
    const bots = [
        'twitterbot',
        'facebookexternalhit',
        'slackbot',
        'whatsapp',
        'linkedinbot',
        'embedly',
        'quora link preview',
        'showyoubot',
        'outbrain',
        'pinterest/0.',
        'developers.google.com/+/web/snippet',
        'slack-imgproxy',
        'discordbot',
        'telegrambot',
        'googlebot',
        'bingbot',
    ];

    const isBot = bots.some((bot) => userAgent.toLowerCase().includes(bot));

    if (isBot) {
        const url = new URL(request.url);
        const pathParts = url.pathname.split('/').filter(Boolean);

        // Expected paths:
        // /attraction/:publicId -> ["attraction", "publicId"]
        // /attraction/:name/:publicId -> ["attraction", "name", "publicId"]

        let publicId = '';
        if (pathParts.length === 2 && pathParts[0].toLowerCase() === 'attraction') {
            publicId = pathParts[1];
        } else if (pathParts.length === 3 && pathParts[0].toLowerCase() === 'attraction') {
            publicId = pathParts[2];
        }

        if (publicId && publicId !== 'index.html') {
            try {
                // Fetch data from the production API
                // Middleware runs on the Edge, so we use process.env directly instead of React hooks
                const apiUrl = process.env.PUBLIC_API_SERVER_IP;
                const response = await fetch(`${apiUrl}/attractions/${publicId}`);

                if (response.ok) {
                    const result = await response.json();
                    const item = result.data;

                    if (item) {
                        const title = `${item.name} | Weather Intelligence`;
                        const description = (item.toldescribe || '').substring(0, 160).replace(/"/g, '&quot;');
                        const image = item.picture1 || '';
                        const canonicalUrl = `https://www.meteosync.com/attraction/${publicId}`;

                        const jsonLd = {
                            "@context": "https://schema.org",
                            "@type": "TouristAttraction",
                            "name": item.name,
                            "description": item.toldescribe,
                            "image": [item.picture1, item.picture2, item.picture3].filter(Boolean),
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": item.address || item.add
                            },
                            "telephone": item.phone,
                            "geo": item.latitude && item.longitude ? {
                                "@type": "GeoCoordinates",
                                "latitude": item.latitude,
                                "longitude": item.longitude
                            } : undefined
                        };

                        // Return a minimal HTML response for social bots
                        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${url.href}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    ${image ? `
    <meta property="og:image" content="${image}">
    <meta property="og:image:secure_url" content="${image}">
    <meta property="og:image:alt" content="${item.name}">
    <link rel="image_src" href="${image}">
    <meta name="image" content="${image}">
    ` : ''}

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${url.href}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    ${image ? `
    <meta name="twitter:image" content="${image}">
    <meta name="twitter:image:alt" content="${item.name}">
    ` : ''}

    <meta name="robots" content="index, follow">

    <!-- Structured Data -->
    <script type="application/ld+json">
        ${JSON.stringify(jsonLd)}
    </script>
</head>
<body>
    <h1>${item.name}</h1>
    <p>${item.toldescribe}</p>
    ${image ? `<img src="${image}" alt="${item.name}">` : ''}
    <p>Loading full experience...</p>
</body>
</html>`;

                        return new Response(html, {
                            headers: {
                                'Content-Type': 'text/html; charset=utf-8',
                                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
                            },
                        });
                    }
                }
            } catch (error) {
                console.error('Middleware SEO fetch error:', error);
            }
        }
    }

    // For humans or if fetching failed, continue to the regular app
    return;
}
