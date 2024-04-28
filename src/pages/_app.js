// app/providers.tsx
'use client'

import '../styles/grid.css';
import '../styles/globals.css';
import { AppProvider} from '../context/AppContext'
import React from 'react';




function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;

