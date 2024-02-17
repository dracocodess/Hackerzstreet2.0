import ScheduleCard from "./ScheduleCard";
import {motion, useScroll} from "framer-motion"
import {useTranslation} from "react-i18next";
import ANIM_STATES_WRAPPER from "../anim/schedule/WrapperStates";


export default function Schedule() {
    const {scrollYProgress} = useScroll();
    const {t} = useTranslation();
    return (
        <div
            className="relative h-full rounded-[33px] w-full items-center block overflow-hidden md:pb-12 md:px-12 px-4 pb-4">

            <h1 className="text-6xl font-bold poppins text-center mx-auto bg-gradient-to-r bg-clip-text text-transparent
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text m-10">{t('Schedule_2')}</h1>


            <div>

                <ol>
                    <time
                        className="text-xl leading-none text-indigo-500 poppins font-semibold">
                        15 March 2023
                    </time>
                    <div className="h-5"/>
                    <ScheduleCard day={"Day 1"} time={"10:00 AM"} event={"Opening Ceremony"} date="15 March 2023"/>
                    <div className="border-dashed border-l border-purple-400 w-1 h-16 absolute ml-4.5"></div>
                    <div className="w-1 h-16 bg-transparent relative rounded-full overflow-hidden ml-4">
                        <motion.div className="w-full h-1 rounded-full bg-purple-500" initial={{
                            height: "0%",
                            y: "0%"
                        }} animate={{
                            transition: {
                                repeat: Infinity,
                                duration: 3,
                                type: "tween",
                            },
                            height: ["0%", '100%'],
                            y: ["0%", "100%"]
                        }}/>
                    </div>
                    <ScheduleCard day={"Day 1"} time={"11:00 AM"} event={"Hackathon Begins"} date="15 March 2023"/>
                </ol>


            </div>

        </div>
    )
}