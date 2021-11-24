import * as React from 'react';

import sayHello from '@/lib/sayHello';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { PreloadProvider } from '@/context/PreloadContext';

let saidHello = false;

export default function Layout({ children }: { children: React.ReactNode }) {
  if (!saidHello) {
    sayHello();
    saidHello = true;
  }

  return (
    <>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
      <Footer />
    </>
  );
}
