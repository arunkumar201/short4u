import FreeShortHookBlock from '@/components/short-container/FreeShortHookBlock';
import { Hero } from '@/components/hero/Hero';
import { OurStats } from '@/components/hero/OurStats';
import TrustedOrgList from '@/components/hero/TrustedOrgList';

export default async function Home() {
  return (
    <main className="mx-8 my-8 dark:bg-[#070815] bg-gray-900/50 h-dvh ">
      <Hero />
      <OurStats />
      <FreeShortHookBlock />
      <TrustedOrgList />
    </main>
  );
}
