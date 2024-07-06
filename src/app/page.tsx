import { FreeShortHookBlock } from '@/components/short-container/FreeShortHookBlock';
import { Hero } from '@/components/hero-section/Hero';
import { OurStats } from '@/components/hero-section/OurStats';
import { TrustedOrgList } from '@/components/hero-section/TrustedOrgList';
import Footer from '@/components/footer/Footer';
import {  WobbleCard } from '@/components/wobble-card';

export default async function Home() {
    return (
        <>
            <Hero />
            <FreeShortHookBlock />
            <WobbleCard>
                <OurStats />
            </WobbleCard>
            <TrustedOrgList />
            <Footer />
        </>
    );
}
