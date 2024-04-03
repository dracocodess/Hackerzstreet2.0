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
    const banner = "https://hackerzstreet2-0.vercel.app/assets/banner.jpeg"
    const {t} = useTranslation();
    return (
        <>
            <Head>
                <title>{t('HACKERZSTREET_TITLE')}</title>
                <meta property="og:type" content="website"/>
                <meta property="twitter:creator" content="@ieeemujcs"/>
                <meta property="twitter:title" content={t('HACKERZSTREET_TITLE')}/>
                <meta property="og:title" content={t('HACKERZSTREET_TITLE')}/>
                <meta property="twitter:description"
                      content="Gear up for an adrenaline-fueled 24-hour coding marathon at Hackerzstreet 2.0, the ultimate tech showdown.🔥"/>
                <meta property="og:description"
                      content="Gear up for an adrenaline-fueled 24-hour coding marathon at Hackerzstreet 2.0, the ultimate tech showdown.🔥"/>
                <meta property="twitter:image" content={banner}/>
                <meta property="og:thumbnail" content={banner}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords"
                      content="ieeecsmuj, ieee cs muj , IEEE CS MUJ, IEEE, Genesis, IEEEMUJ, MUJ, CS Club, Manipal University Jaipur, Computer Society Club MUJ, Jaipur, Manipal's Biggest , Technical club, ieee student chapter, ieee hackathon, hackathon, hackerzstreet,coding, 24 hours,overnight, coding competition, programming,hackerzstreet 2.0"
                />
                <meta name="description"
                      content="Gear up for an adrenaline-fueled 24-hour coding marathon at Hackerzstreet 2.0, the ultimate tech showdown.🔥"/>
                <meta name="theme-color" content="#b6b6fa"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="og:color" content="#b6b6fa"/>
            </Head>
            <Navbar/>
            <section id={"home"} className="w-full p-3">
                <Hero/>
            </section>
            {/*<section id={"sponsors"} className="w-full p-3">*/}
            {/*    <Sponsors/>*/}
            {/*</section>*/}
            <section id={"schedule"} className="w-full p-3">
                <Schedule/>
            </section>
            <section id={"tracks"} className="w-full p-3">
                <Tracks/>
            </section>
            <section id={"about"} className="w-full p-3">
                <About/>
            </section>
        </>
    );
}
