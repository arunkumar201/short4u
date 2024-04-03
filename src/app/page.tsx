import { Hero } from '../components/Hero/Hero';
import { OurStats } from '@/components/Hero/OurStats';

export default async function Home() {
  return (
    <main className="mx-8 my-8 dark:bg-[#070815] bg-gray-900/50 h-dvh ">
      <Hero />
      <OurStats />
      {/* <TrustedOrgList /> */}
    </main>
  );
}
