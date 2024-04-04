import Image from 'next/image';
import Link from 'next/link';
import { logos } from '@/data/TrustedOrgList';

export type TrustedLogoProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo: any;
  name: string;
  href: string;
};

export function TrustedOrgList() {
  return (
    <div className="w-full py-6 md:py-8 bg-slate-300 dark:bg-primary/60 mt-4 rounded-2xl text-center flex justify-center items-center shadow-inner shadow-teal-300 dark:shadow-[#FFD700]">
      <div className="container w-full flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by the Best
          </h2>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-50">
            The most innovative companies trust our platform.
          </p>
        </div>
        <div className="flex w-full flex-wrap justify-center items-center gap-4 rounded-2xl">
          {logos.map((logo, index) => (
            <TrustedLogo key={index} {...logo} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustedLogo({ logo, name, href }: TrustedLogoProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-center flex flex-col items-center gap-y-3 hover:border-[0.3px]  p-5 md:p-9 rounded-2xl hover:bg-gray-50/5 hover:dark:bg-gray-500/5 cursor-pointer hover:transition hover:delay-75 "
    >
      <Image
        alt="Logo"
        className="aspect-[2/1] overflow-hidden rounded-2xl object-contain object-center "
        height="60"
        src={logo}
        width="120"
      />
      <span className="text-sm font-medium dark:text-secondary-foreground text-primary-foreground">
        {name}
      </span>
    </Link>
  );
}
