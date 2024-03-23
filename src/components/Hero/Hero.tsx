import { Button } from "../ui/button";
import HeroBg1 from "../../../public/hero/hero-bg.svg"
import HeroMain from "../../../public/hero/heroMain.png"
import Image from "next/image";
import React from "react";
export const Hero = () => {
  return (
    <>
      <section className="flex w-full flex-row justify-between items-start flex-1">
        {/* Left Content  */}
        <div className="w-full md:w-[43rem] flex flex-col justify-center items-start gap-4">
          <div>
            <Button
              variant={'outline'}
              className="text-sm md:p-4 tracking-wide  rounded-xl dark:text-secondary-foreground text-accent bg-accent-foreground dark:bg-primary-foreground hover:dark:bg-secondary"
            >
              {'✨✨ AI-Enhanced Link Shortener & Analytics Platform.🤖✨'}
            </Button>
          </div>
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
          <div className="flex flex-row gap-x-4 w-full">
            <Button
              className="text-sm md:text-base md:p-6 p-5 tracking-wide  rounded-xl text-secondary-foreground bg-[#2A5BD6]/80 hover:bg-[#2A5BD6]"
            >
              Get Started For Free
            </Button>
            <Button
              className="text-sm md:text-base md:p-6 p-5 tracking-wide rounded-xl text-zinc-900 bg-accent-foreground hover:bg-inherit dark:bg-accent dark:text-secondary-foreground "
              variant={'outline'}>
              Get Quote
            </Button>
          </div>
        </div>
        {/* Right content */}
        <div className={`bg-[url('../../public/hero/hero-star.jpeg')] bg-cover bg-center h-full bg-scroll`}>
          <div>
            <Image
              src={HeroBg1}
              className="w-[23rem] h-[23rem]"
              width={400}
              height={400}
              alt="hero image"
            />
          </div>
        </div>
      </section >
    </>
  );
};
