import ScheduleCard from "./ScheduleCard";
import {motion, useScroll} from "framer-motion"
import {useTranslation} from "react-i18next";
import ANIM_STATE_SECTION from "../anim/section";

export default function Schedule() {
    const {scrollYProgress} = useScroll();
    const {t} = useTranslation();
    return (
        <motion.div
            variants={ANIM_STATE_SECTION}
            whileInView="whileInView"
            initial="initial"
            className="relative h-full rounded-[33px] w-full items-center block overflow-hidden md:pb-12 md:px-12 px-4 pb-4">

            <h1 className="text-6xl font-bold poppins text-center mx-auto bg-gradient-to-r bg-clip-text text-transparent
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text m-10">{t('Schedule_2')}</h1>


            <div>

                <ol>
                    <div
                        className="text-xl leading-none text-indigo-500 poppins font-semibold text-center mx-auto">
                        {t('15 March 2023')}
                    </div>
                    <div className="h-5"/>
                    <ScheduleCard day={"Day 1"} time={"10:00 AM"} event={"Opening Ceremony"}/>
                    <div className="border-dashed border-l border-purple-400 w-1 h-16 absolute left-1/2"></div>
                    <div className="w-1 h-16 bg-transparent relative rounded-full overflow-hidden mx-auto">
                        <motion.div className="w-full h-1 rounded-full bg-purple-500 ml-[0.1rem]" initial={{
                            height: "0%",
                            y: "0%"
                        }} animate={{
                            transition: {
                                repeat: Infinity,
                                duration: 3,
                                type: "easeInOut",
                            },
                            height: ["0%", '100%'],
                            y: ["0%", "100%"]
                        }}/>
                    </div>
                    <ScheduleCard day={"Day 1"} time={"11:00 AM"} event={"Hackathon Begins"}/>
                </ol>


            </div>

        </motion.div>
    )
}