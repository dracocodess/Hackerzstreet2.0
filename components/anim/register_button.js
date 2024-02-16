import { motion } from "framer-motion"
import ANIM_STATES from '../../anim/header/register_button';
import { useTranslation } from "react-i18next";

export default function RegisterButton() {
    const { t } = useTranslation()
    return (
        <motion.button initial='initial' whileHover="whileHover" className="relative h-10 flex overflow-hidden bg-slate-100 py-1 gap-2 pr-4 pl-2 shadow-md text-md text-black rounded-full uppercase font-medium leading-loose poppins">
            <motion.div variants={ANIM_STATES} className='rounded-full h-full w-full bg-blue-400 -ml-2 absolute top-0'></motion.div>
            <div className="block relative">
                <motion.div variants={{
                    initial: {
                        y: 0,
                        opacity: 1
                    },
                    whileHover: {
                        y: -50,
                        opacity: 0
                    }
                }} className="flex z-10 items-center gap-2">
                    <span class="material-symbols-outlined text-[1rem] z-10">
                        {"arrow_forward"}
                    </span>
                    <span className="z-10">{t("Register")}</span>
                </motion.div>
                <motion.div variants={{
                    initial: {
                        y: 0,
                        opacity: 0
                    },
                    whileHover: {
                        y: -31.5,
                        opacity: 1
                    }
                }} className="flex z-10 items-center gap-2 text-white">
                    <span class="material-symbols-outlined text-[1rem] z-10">
                        {"arrow_forward"}
                    </span>
                    <span className="z-10">{t("Register")}</span>
                </motion.div>
            </div>
        </motion.button>
    )
}
