import {useTranslation} from 'react-i18next';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Head from 'next/head';
import Schedule from "../components/sections/Schedule";
import About from "../components/sections/About";
import {useEffect} from "react";
import {animate} from "framer-motion";
import Sponsors from "../components/sections/Sponsors";
import Tracks from "../components/sections/Track";

export default function Home() {
    useEffect(() => {
        window.addEventListener("hashchange", () => {
            const id = window.location.hash.replace("#", "");
            if (id) {
                const element = document.querySelector(`#header-section-${id}`);
                if (!element) return;
                animate(element, {
                    width: ["0%", "100%", "100%"],
                    x: ["0%", "0%", "110%"],
                }, {type: "tween", duration: 1, delay: 0.5, ease: "easeInOut"})
            }
        })
    }, []);
    const {t} = useTranslation();
    return (
        <>
            <Head>
                <title>{t('HACKERZSTREET_TITLE')}</title>
                <meta name="description" content={t('HACKERZSTREET_DESCRIPTION')}/>
                <meta name="keywords" content={t('HACKERZSTREET_KEYWORDS')}/>
                <meta name="author" content={t('HACKERZSTREET_AUTHOR')}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            </Head>
            <Navbar/>
            <section id={"home"} className="w-full p-3">
                <Hero/>
            </section>
              <section id={"sponsors"} className="w-full p-3">
                 <Sponsors/>
               </section>
            <section id={"schedule"} className="w-full p-3">
                <Schedule/>
            </section>
            <section id = {"tracks"} className="w-full p-3">
                <Tracks/>
            </section>
            <section id={"about"} className="w-full p-3">
                <About/>
            </section>
        </>
    );
}
