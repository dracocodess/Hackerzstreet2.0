import {useTranslation} from 'react-i18next';
import Navbar from '../components/navbar';
import Image from 'next/image';
import Hero from '../components/hero';
import Head from 'next/head';
import Schedule from "../components/Schedule";
import About from "../components/About";

export default function Home() {
    const {t} = useTranslation();
    return (
        <>
            <Head>
                <title>{t('HACKERZSTREET_TITLE')}</title>
            </Head>
            <Navbar/>
            <section id={"home"} className="w-full p-3">
                <Hero/>
            </section>
            <section id={"schedule"} className="w-full p-3">
                <Schedule/>
            </section>
            <section id={"about"} className="w-full p-3">
                <About/>
            </section>
        </>
    );
}
