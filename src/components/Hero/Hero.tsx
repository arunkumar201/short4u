import { Button } from '../ui/button';
import HeroMain from '../../../public/hero/main-hero.svg';
import Image from 'next/image';
import React from 'react';
export const Hero = () => {
  return (
    <>
      <section className="flex w-full flex-row justify-between items-start flex-1 flex-wrap gap-y-3 md:gap-0">
        {/* Left Content  */}
        <div className="w-full md:w-[52%] flex flex-col justify-center items-start gap-4">
          <Button
            variant={'outline'}
            className="w-full md:w-fit text-sm md:p-4 tracking-wide  rounded-xl dark:text-secondary-foreground text-accent bg-accent-foreground dark:bg-primary-foreground hover:dark:bg-secondary"
          >
            {'✨✨ AI-Enhanced Link Shortener & Analytics Platform.🤖✨'}
          </Button>
          <div>
            <p className="text-3xl subpixel-antialiased	 font-bold md:text-3xl tracking-wide leading-snug sm:text-2xl xl:text-4xl/none">
              <p>
                The{' '}
                <span className="decoration-amber-400 decoration-dotted underline decoration-[3px] hover:rounded-xl hover:h-3 hover:bg-zinc-600/50 hover:dark:bg-secondary/50 cursor-pointer">
                  AI-Powered URL Shortener &amp; Analytics Platform
                </span>
                That Empowers You to Shorten, Analyze, and Optimize Your Links
                for Maximum Impact and Insights.
              </p>
            </p>
          </div>
          <article className="text-sm ">
            <span>
              On one comprehensive platform,you&apos;ll need to connect audience
              on a Global Scale!. Elevate your link management with AI-driven
              features, advanced ML analytics, and unparalleled brand
              relationship capabilities.
            </span>
          </article>
          <div className="flex flex-row gap-x-4 w-full justify-center md:justify-start items-center ">
            <Button className="text-sm md:text-base md:p-6 p-5 tracking-wide  rounded-xl text-secondary-foreground bg-[#2A5BD6]/80 hover:bg-[#2A5BD6]">
              Get Started For Free
            </Button>
            <Button
              className="text-sm md:text-base md:p-6 p-5 tracking-wide rounded-xl text-zinc-900 bg-accent-foreground hover:bg-inherit dark:bg-accent dark:text-secondary-foreground "
              variant={'outline'}
            >
              Get Quote
            </Button>
          </div>
        </div>
        {/* Right content */}
        <div
          className={`h-full bg-scroll w-full md:w-[45%] md:mt-3 flex justify-center items-center `}
        >
          <div>
            <Image
              src={HeroMain}
              className="md:w-[53rem] md:h-[29rem] w-full h-full  "
              width={400}
              height={500}
              quality={100}
              priority={true}
              aria-description="Banner Image- short4u"
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </>
  );
};
