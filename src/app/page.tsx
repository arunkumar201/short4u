import { FreeShortHookBlock } from '@/components/short-container/FreeShortHookBlock';
import { Hero } from '@/components/hero-section/Hero';
import { OurStats } from '@/components/hero-section/OurStats';
import { TrustedOrgList } from '@/components/hero-section/TrustedOrgList';
import Footer from '@/components/footer/Footer';

export default async function Home() {
    return (
        <>
            <Hero />
            <OurStats />
            <FreeShortHookBlock />
            <TrustedOrgList />
            <Footer />
        </>
    );
}
