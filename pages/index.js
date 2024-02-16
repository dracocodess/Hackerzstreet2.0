import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar';
import Image from 'next/image';
import Hero from '../components/hero';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <section className='w-full h-screen p-3'>
       <Hero/>
      </section>
    </>
  )
}
