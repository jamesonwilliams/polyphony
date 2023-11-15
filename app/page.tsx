import dynamic from 'next/dynamic';

const DynamicSynthesizer = dynamic(() => import('./Synthesizer'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <DynamicSynthesizer />
    </main>
  );
}
