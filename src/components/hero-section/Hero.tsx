import { Button } from '../ui/button';
import HeroMain from '../../../public/hero/main-hero.svg';
import { MovingBorderButton } from '../ui/moving-border';
import React from 'react';
export const Hero = () => {
    return (
        <>
            <section className="relative flex w-full flex-row justify-between items-start flex-1 flex-wrap gap-y-3 md:gap-0 prose">
                {/* Left Content  */}
                <div className="w-full md:w-[52%] flex flex-col justify-center items-start gap-4">
                    <MovingBorderButton
                        containerClassName="w-full md:w-fit h-15"
                        className="p-3 subpixel-antialiased border-gray-600 w-full h-16 md:h-12  md:w-fit text-sm  tracking-wide  rounded-xl dark:text-secondary-foreground text-accent-foreground bg-accent dark:bg-primary-foreground hover:dark:bg-secondary"
                    >
                        {
                            '✨✨ AI-Enhanced Link Shortener & Analytics Platform.🤖✨'
                        }
                    </MovingBorderButton>
                    <div className="antialiased">
                        <p className="text-3xl subpixel-antialiased	font-bold md:text-3xl tracking-wide leading-snug sm:text-2xl xl:text-4xl/none md:text-start text-center">
                            <p>
                                The{' '}
                                <span className="decoration-amber-400 decoration-dotted underline decoration-[3px] hover:rounded-xl hover:h-3 hover:bg-zinc-600/50 hover:dark:bg-secondary/50 cursor-pointer">
                                    AI-Powered URL Shortener &amp; Analytics
                                    Platform
                                </span>
                                That Empowers You to Shorten, Analyze, and
                                Optimize Your Links for Maximum Impact and
                                Insights.
                            </p>
                        </p>
                    </div>
                    <article className="text-sm md:text-start text-center">
                        <span className="leading-6 antialiased max-w-prose">
                            On one comprehensive platform,you&apos;ll need to
                            connect audience on a Global Scale!. Elevate your
                            link management with AI-driven features, advanced ML
                            analytics, and unparalleled brand relationship
                            capabilities.
                        </span>
                    </article>
                    <div className="flex flex-row gap-x-4 w-full justify-center md:justify-start items-center ">
                        <Button className="text-sm md:text-base md:p-4 p-3 tracking-wide  rounded-xl text-secondary-foreground bg-[#2A5BD6]/80 hover:bg-[#2A5BD6]">
                            Get Started For Free
                        </Button>
                        <Button
                            className="text-sm md:text-base md:p-4 p-3 tracking-wide rounded-xl text-zinc-900 bg-accent-foreground hover:bg-inherit dark:bg-accent dark:text-secondary-foreground "
                            variant={'outline'}
                        >
                            Get Quote
                        </Button>
                    </div>
                </div>
                {/* Right content */}
                <div
                    className={`h-full bg-scroll w-full md:w-[48%] flex justify-center mt-4 items-center`}
                >
                    <div
                        className="md:h-[27rem] w-full h-full object-cover bg-transparent  bg-center relative items-center flex"
                        style={{ backgroundImage: `url(${HeroMain.src})` }}
                        aria-description="Banner Image- short4u"
                    ></div>
                </div>
            </section>
        </>
    );
};
