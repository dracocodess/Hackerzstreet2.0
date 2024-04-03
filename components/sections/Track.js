import ANIM_STATE_SECTION from "../../anim/section";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import TrackCard from "../TrackCard";
import {TRACK_META} from "../track_meta";


export default function Tracks() {
    const {t} = useTranslation();
    return <motion.div
        variants={ANIM_STATE_SECTION}
        whileInView="whileInView"
        initial="initial"
        className="relative rounded-[33px] w-full items-center block overflow-hidden md:pb-12 md:px-12 px-4 pb-4 bg-gradient-31
        from-orange-400 to-orange-300 py-10 -z-10">
        <div className="overflow-hidden w-fit mx-auto relative rounded-md m-10 px-2">
            <div id="header-section-tracks"
                 className="-left-2 w-0 bg-blue-300 rounded-md h-full absolute top-0 -z-10"></div>
            <h1 className="text-6xl font-bold poppins text-center mx-auto bg-gradient-to-r ease-in-out via-lime-300 bg-clip-text text-transparent
            from-green-400 to-green-300
            animate-text z-10">{t('Tracks')}</h1>
        </div>
        <div className="h-2"/>
        <h2 className="text-center mx-auto font-bold text-xl poppins text-lime-300">{t('Our tracks')}</h2>
        <div className="h-10"/>
        {TRACK_META.map(({name: track, description: desc}, index) => (
            <TrackCard key={index} pi={++index} track={track} desc={desc}/>
        ))}
    </motion.div>
}