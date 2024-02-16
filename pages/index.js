import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar';
import Image from 'next/image';
import Hero from '../components/hero';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('HACKERZSTREET_TITLE')}</title>
      </Head>
      <Navbar />
      <section className="w-full min-h-screen p-3">
        <Hero />
      </section>
    </>
  );
}
