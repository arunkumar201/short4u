import { FooterDataType, footerData } from '@/data/Footer';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/navbar/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Mail } from 'lucide-react';
const Footer = () => {
    return (
        <>
            <footer className="block bg-[#9AC8CD] dark:bg-[#074173] dark:text-zinc-50 text-gray-600 rounded-xl mt-4">
                <div className="py-16 md:py-10 lg:py-17 mx-auto w-full max-w-7xl px-5 md:px-7 ">
                    <div className="h-[6rem] w-[6rem] relative rounded-xl ">
                        <Link href="/" target="_blank">
                            <Image
                                src={logo}
                                alt="logo"
                                className="absolute mb-12 rounded-full border-b-cyan-400 border-2"
                                fill={true}
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-[auto_auto] justify-between gap-10 sm:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_0.45fr]">
                        {footerData.map(
                            (section: FooterDataType, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-start font-semibold"
                                >
                                    <div className="m-4 ml-0 mr-0 lg:ml-0 lg:mr-0">
                                        <div className="uppercase text-base">
                                            {section.title}
                                        </div>
                                    </div>
                                    {section.links.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href="#"
                                            className="py-2 text-sm font-normal text-[#636262] dark:text-[#dfd3d3] transition hover:text-[#302dd7] dark:hover:text-amber-200"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            )
                        )}
                        <div className="mt-4 flex w-full grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:mr-0 max-[991px]:max-w-[400px] max-[991px]:[grid-area:span_1/span_3/span_1/span_3]">
                            <div className="font-bold uppercase text-lg">
                                Subscribe to Newsletter
                            </div>
                            <div className="mx-0 w-full">
                                <form
                                    name="email-form"
                                    method="get"
                                    className="relative max-w-full"
                                >
                                    <div className="flex flex-col gap-1">
                                        <input
                                            type="email"
                                            className="m-0 mb-2.5 block h-9 w-full rounded-sm border border-solid border-black bg-white px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec]"
                                            maxLength={256}
                                            name="email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                        <Button
                                            type="submit"
                                            value="Subscribe"
                                            className="inline-block cursor-pointer items-center bg-black px-6 py-2 text-center font-semibold text-white"
                                        >
                                            Subscribe
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <p className="font-bold uppercase md:text-sm">
                                    email us
                                </p>
                                <Link href="mailto:contact@short4u.in">
                                    <p className="text-[#636262] dark:text-zinc-100 md:text-lg flex flex-row items-center justify-center gap-2 hover:underline">
                                        <Mail />
                                        <span>contact@short4u.in</span>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mb-14 mt-16 w-full border border-solid dark:border-yellow-200 border-gray-600"></div>
                    <div className="flex flex-row md:justify-between items-center max-[767px]:flex-col max-[767px]:items-start md:flex-col-reverse justify-center w-full">
                        <div className="flex-none">
                            <p className="text-sm">
                                © Copyright 2023-2024. All rights reserved.
                            </p>
                        </div>
                        <div className="grid w-full items-center max-w-[208px] grid-flow-col grid-cols-4 gap-3 max-[767px]:mt-4 md:mb-4">
                            <Link href="#" className="cursor-pointer">
                                <div className="flex flex-col items-center justify-center  rounded-full">
                                    <FaFacebook
                                        className="h-9 w-9 text-blue-700 dark:text-blue-50 hover:text-blue-700/60 "
                                        size={30}
                                    />
                                </div>
                            </Link>
                            <Link href="#" className="cursor-pointer">
                                <div className="flex flex-col items-center justify-center ">
                                    <FaTwitter
                                        className="text-blue-500 dark:text-blue-100 hover:text-blue-500/60 "
                                        size={30}
                                    />
                                </div>
                            </Link>
                            <Link href="#" className="cursor-pointer">
                                <div className="flex flex-col items-center justify-center ">
                                    <FaInstagram
                                        className="text-pink-500  hover:text-pink-500/60 "
                                        size={30}
                                    />
                                </div>
                            </Link>
                            <Link href="#" className="cursor-pointer">
                                <div className="bg-none flex flex-col items-center justify-center ">
                                    <FaLinkedin
                                        className="text-blue-800 dark:text-blue-300 hover:text-blue-800/60 "
                                        size={30}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
