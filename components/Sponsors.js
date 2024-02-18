import {useTranslation} from "react-i18next";
import ANIM_STATE_SECTION from "../anim/section";
import {motion} from "framer-motion";

export default function Sponsors() {
    const {t} = useTranslation();
    return (
        <motion.div
            variants={ANIM_STATE_SECTION}
            whileInView="whileInView"
            initial="initial"
            className="relative h-full rounded-[33px] w-full items-center block overflow-hidden md:pb-12 md:px-12 px-4 pb-6 bg-gradient-31
            to-[#616090] from-[#30325D] -z-10">
            <div className="overflow-hidden w-fit mx-auto relative rounded-md m-10 px-2">
                <div id="header-section-sponsors"
                     className="-left-2 w-0 bg-purple-300 rounded-md h-full absolute top-0 -z-10"></div>
                <h1 className="text-6xl font-bold poppins text-center mx-auto bg-gradient-to-r ease-in-out via-blue-500 bg-clip-text text-transparent
            from-blue-400 to-blue-400
            animate-text z-10">{t('Sponsors_2')}</h1>
            </div>
            <div className="h-5"/>
            <h2 className="text-center mx-auto font=bold text-xl poppins text-blue-300">{t('Our Proud Sponsors')}</h2>
            <div className="h-5"/>
        </motion.div>
    )
}