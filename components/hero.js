import Image from 'next/image';
import {useTranslation} from 'react-i18next';
import Counter from './counter';
import Typewriter from 'typewriter-effect/dist/core';
import {useEffect} from "react";
import RegisterButton from "./anim/register_button";
import {motion} from "framer-motion";

export default function Hero() {
    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['HACKERZSTREET 2.0', 'Debug.', "Code.", 'Innovate.', "Win."],
            autoStart: true,
            loop: true,
        });
    });
    const {t} = useTranslation();
    return (
        <motion.div
            whileInView={{opacity: 1}}
            initial={{opacity: 0}}
            className="h-full rounded-[33px]  w-full bg-gradient-31 from-header-left to-header-right flex items-center flex-col overflow-hidden md:flex-row">
            <Image
                src="/assets/Asset 7hackerstreet mobiile element new.svg"
                alt="Hackerstreet"
                width={1920}
                height={1080}
                className="w-full h-full md:w-1/2"
            />
            <div className="block text-wrap break-words md:px-8 px-2 py-12 mt-5">
                <Image src="/assets/ieee-logo-white.svg" alt="logo" className="w-64 md:w-72 mb-10" width={1960}
                       height={1080}/>
                <span id="typewriter"
                      className="text-[#d6d5e3] lg:text-[4rem] md:text-3xl text-3xl font-bold poppins"></span>
                <div className="h-5"/>
                {/*<span className="block text-[#d6d5e3] text-2xl font-medium">{t('a_hackathon')}</span>*/}
                <RegisterButton/>
                <div className="h-20"></div>
                <div className="flex gap-2 text-brand-green text-3xl font-bold poppins">
                    <span className="">{t('Rs.')}</span>

                    <Counter value={40000}/>

                    {t('/-')}
                </div>
                <span className="block text-slate-300 text-xl font-medium">{t('Prize Pool')}</span>
            </div>
        </motion.div>
    );
}
