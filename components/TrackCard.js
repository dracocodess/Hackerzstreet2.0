import Image from "next/image";
import ANIM_STATES_CARD from "../anim/schedule/CardStates";
import {motion} from "framer-motion";

export default function TrackCard({pi, track, desc}) {
    return <motion.div
        variants={ANIM_STATES_CARD}
        whileInView="whileInView"
        initial="initial"
        className="flex md:flex-row flex-col md:gap-20 max-w-4xl w-full mb-16 gap-5 text-3xl mx-auto">

        <Image src={`/assets/track${pi}.svg`} alt={`track${pi}`} width={200} height={200} className="h-48 w-48 mx-auto md:m-0"/>
        <div>
            <div className="font-bold text-green-300 text-center md:text-left">{track}</div>
            <div className="h-5"></div>
            <div className="font-medium text-slate-100 text-lg text-center md:text-left">{desc}</div>
        </div>
    </motion.div>
}