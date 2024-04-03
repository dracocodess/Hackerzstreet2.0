import {useTranslation} from "react-i18next";
import ANIM_STATE_SECTION from "../../anim/section";
import {motion, useAnimation, useInView} from "framer-motion";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

const sponsors = ["/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg"]
export default function Sponsors() {
    const {t} = useTranslation();
    const [computedSponsorImageSize, setComputedSponsorImageSize] = useState(500)
    useEffect(() => {
    }, []);
    return (<motion.div
        variants={ANIM_STATE_SECTION}
        whileInView="whileInView"
        initial="initial"
        className="relative h-full rounded-[33px] w-full items-center block overflow-hidden md:pb-12 md:px-12 px-4 pb-6 bg-gradient-31
            to-[#616090] from-[#30325D] -z-10">
        <div className="overflow-hidden w-fit mx-auto relative rounded-md m-10 px-2">
            <div id="header-section-sponsors"
                 className="-left-2 w-0 bg-blue-300 rounded-md h-full absolute top-0 -z-10"></div>
            <h1 className="text-6xl font-bold poppins text-center mx-auto bg-gradient-to-r ease-in-out via-blue-500 bg-clip-text text-transparent
            from-blue-400 to-blue-400
            animate-text z-10">{t('Sponsors_2')}</h1>
        </div>
        <div className="h-5"/>
        <h2 className="text-center mx-auto font=bold text-xl poppins text-blue-300">{t('Our Proud Sponsors')}</h2>
        <div className="h-10"/>
        <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {sponsors.map((sponsor, index) => (
                        <li key={index}>
                            <Image src={sponsor} alt="Sponsor" width={500} height={200} key={index}
                                   className="w-[250px] h-[100px] md:w-[500px] md:h-[200px]"/>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true">
                    {sponsors.map((sponsor, index) => (
                        <li key={index}>
                            <Image src={sponsor} alt="Sponsor" width={500} height={200} key={index}
                                   className="w-[250px] h-[100px] md:w-[500px] md:h-[200px]"/>
                        </li>
                    ))}
                </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {sponsors.map((sponsor, index) => (
                    <li key={index}>
                        <Image src={sponsor} alt="Sponsor" width={500} height={200} key={index}
                               className="w-[250px] h-[100px] md:w-[500px] md:h-[200px]"/>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true">
                {sponsors.map((sponsor, index) => (
                    <li key={index}>
                        <Image src={sponsor} alt="Sponsor" width={500} height={200} key={index}
                               className="w-[250px] h-[100px] md:w-[500px] md:h-[200px]"/>
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>)
}