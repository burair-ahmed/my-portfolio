// src/app/page.tsx
export const metadata = {
  title: 'Three.js with Next.js',
  description: 'Integration of Three.js in a Next.js app',
};

import ThreeScene from './components/ThreeScene';

export default function Home() {
  return (
    <div>
      <h1>Three.js Scene</h1>
      <ThreeScene />
    </div>
  );
}
