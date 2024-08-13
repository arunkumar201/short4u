import { Blur } from '@/components/Blur';
import ManyOffersVariant1 from '@/components/EnhancePricing';
import React from 'react';

type PricingProps = {
    // Add any additional props you need for this page here.
};

const PricingPage = ({}: PricingProps) => {
    return (
        <div className="min-h-screen  relative -top-14 flex place-items-center w-full">
            <div className="w-full">
                <Blur />
                <div className="-mt-8">
                    <div className="mx-auto max-w-2xl text-center mb-2">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Pricing
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            {
                                "Choose the plan that's right for your business. All plans include a 14-day free trial."
                            }
                        </p>
                    </div>{' '}
                    <ManyOffersVariant1 />
                </div>
                {/* <Pricing /> */}
            </div>
        </div>
    );
};

export default PricingPage;
