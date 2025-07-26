import React, { useEffect } from 'react';
import OriginalLayout from '@theme-original/Layout';
import '../../i18n'; // initialize i18next

export default function Layout(props) {
  return <OriginalLayout {...props} />;
}
