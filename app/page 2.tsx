'use client';

import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/components/NextLevelHomePage'), {
  ssr: false
});

export default function Home() {
  return <HomePage />;
}