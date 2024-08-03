import { Blur } from '@/components/Blur';
import { Pricing } from '@/components/pricing';
import React from 'react';

type PricingProps = {
    // Add any additional props you need for this page here.
};

const PricingPage = ({}: PricingProps) => {
    return (
        <div className="min-h-screen  relative -top-14 flex place-items-center w-full">
            <div className="w-full">
                <Blur />
                <Pricing />
            </div>
        </div>
    );
};

export default PricingPage;
