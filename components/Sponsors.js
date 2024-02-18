import {useTranslation} from "react-i18next";
import ANIM_STATE_SECTION from "../anim/section";
import {motion, useAnimation, useInView} from "framer-motion";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

const sponsors = ["/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg", "/assets/ieee-logo-white.svg",]
export default function Sponsors() {
    const {t} = useTranslation();
    const [computedSponsorImageSize, setComputedSponsorImageSize] = useState(500)
    useEffect(() => {
        setComputedSponsorImageSize(document.getElementById("sponsor-image").offsetWidth)
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
        <div className="w-full overflow-hidden relative">
            <motion.div
                animate={{
                    x: [0, -(sponsors.length * computedSponsorImageSize) + 40],
                    transition: {
                        duration: 20,
                        repeat: Infinity,
                        type: "tween",
                        ease: "linear",
                        repeatType: "reverse"
                    }
                }}

                className = "flex gap-10" id="sponsor-image">
                {sponsors.map((sponsor, index) => (
                    <Image src={sponsor} alt="Sponsor" width={500} height={200} key={index}
                           className="w-[500px] h-[200px] flex-shrink-0"/>
                ))}
            </motion.div>
        </div>
    </motion.div>)
}