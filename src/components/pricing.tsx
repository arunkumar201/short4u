'use client';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

export const Pricing = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container max-w-6xl px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Pricing
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        {
                            "Choose the plan that's right for your business. All plans include a 14-day free trial."
                        }
                    </p>
                </div>{' '}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border bg-background p-8 shadow-lg">
                        <h3 className="text-xl font-semibold">Starter</h3>
                        <p className="mt-4 flex items-baseline">
                            <span className="text-4xl font-bold">$9</span>
                            <span className="ml-1 text-sm font-medium text-muted-foreground">
                                /month
                            </span>
                        </p>
                        <ul className="mt-8 space-y-3 text-muted-foreground">
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                Up to 5 users
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                10 GB storage
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                Basic analytics
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                Email support
                            </li>
                        </ul>
                        <Button className="mt-8 w-full">Get Started</Button>
                    </div>
                    <div className="rounded-lg border bg-background p-8 shadow-lg">
                        <h3 className="text-xl font-semibold">Pro</h3>
                        <p className="mt-4 flex items-baseline">
                            <span className="text-4xl font-bold">$29</span>
                            <span className="ml-1 text-sm font-medium text-muted-foreground">
                                /month
                            </span>
                        </p>
                        <ul className="mt-8 space-y-3 text-muted-foreground">
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                Up to 25 users
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                100 GB storage
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                Advanced analytics
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                Priority email support
                            </li>
                        </ul>
                        <Button className="mt-8 w-full">Get Started</Button>
                    </div>
                    <div className="rounded-lg border bg-background p-8 shadow-lg">
                        <h3 className="text-xl font-semibold">Enterprise</h3>
                        <p className="mt-4 flex items-baseline">
                            <span className="text-4xl font-bold">$99</span>
                            <span className="ml-1 text-sm font-medium text-muted-foreground">
                                /month
                            </span>
                        </p>
                        <ul className="mt-8 space-y-3 text-muted-foreground">
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                Unlimited users
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                1 TB storage
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                Enterprise-grade analytics
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                                Dedicated account manager
                            </li>
                        </ul>
                        <Button className="mt-8 w-full">Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
