import {motion} from "framer-motion";
import ANIM_STATES_CARD from "../anim/schedule/CardStates";

export default function ScheduleCard({day, time, date, event}) {
    return <>
        <div className="relative">

            <motion.div
                variants={ANIM_STATES_CARD}
                whileInView="whileInView"
                initial="initial"
                className="border-2 drop-shadow-lg md:w-1/3 min-w-52 h-40 rounded-md w-full animate-border">
                <div className="text-3xl font-bold poppins text-center mx-auto p-2">{day}</div>
                <div className="text-xl font-bold poppins text-center mx-auto p-2">{time}</div>
                <div className="text-xl font-bold poppins text-center mx-auto p-2">{event}</div>
            </motion.div>
        </div>
    </>
}