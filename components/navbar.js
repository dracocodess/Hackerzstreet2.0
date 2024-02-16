import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { PATH1_VARIANTS, PATH2_VARIANTS, PATH3_VARIANTS } from "../anim/menu"
import { useState } from "react"
import { Image } from 'next/image';
import Link from "next/link"
import links from "../utils/links"
import ANIM_STATES_LINKS from './../anim/nav/links';
import ANIM_STATES from './../anim/menu/underMenu';
import NavLink from "./anim/nav_link";
export default function Navbar() {
    const { t } = useTranslation()
    const [menuState, setMenuState] = useState("open")
    const [menuOpen, setMenuOpen] = useState("open")
    const handleMenuState = () => {
        setMenuState("int")
        const nextState = menuState === "open" ? "close" : "open"
        setMenuOpen(nextState)
        setTimeout(() => {
            setMenuState(nextState)
        }, 500)
    }
    return <><div className="h-12 w-full flex py-10 px-8 fixed text-white align-middle select-none items-center z-10">
        
        <motion.span className="text-xl poppins font-bold">{t("HACKERZSTREET_TITLE")}</motion.span>
        <motion.div className="h-6 w-0.5 bg-white mx-4 hidden md:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}></motion.div>
        <div className="gap-5 hidden md:flex">
            {links.map((link, index) => {
                return <NavLink href={link.path} heading={t(link.name)} key={index} _key={index} />
            })}
        </div>
        <button className="py-1 px-2 rounded-full ml-auto md:hidden z-10" onClick={handleMenuState}> <svg width='24' height='24' viewBox='0 0 24 24'>
            <motion.path strokeLinecap="round" strokeWidth={4} stroke="#000000" variants={PATH1_VARIANTS} animate={menuState} />
            <motion.path strokeLinecap="round" strokeWidth={4} stroke="#000000" variants={PATH2_VARIANTS} animate={menuState} />
            <motion.path strokeLinecap="round" strokeWidth={4} stroke="#000000" variants={PATH3_VARIANTS} animate={menuState} />
        </svg>
        </button>
    </div>
        <motion.div className="absolute bottom-0 w-full h-0 bg-blue-300" variants={ANIM_STATES} initial={'open'} animate={menuOpen} transition={{ duration: 0.5, type: "easeIn" }}></motion.div>
    </>
}