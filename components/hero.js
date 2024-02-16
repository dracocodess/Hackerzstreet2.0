import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Counter from './counter';

export default function Hero() {
    const { t } = useTranslation()
    return <div className='h-full rounded-[33px] w-full bg-gradient-31 from-header-left to-header-right flex items-center flex-col overflow-hidden md:flex-row'>

        <Image src="/assets/Asset 7hackerstreet mobiile element new.svg" alt='Hackerstreet' width={1920} height={1080} className='w-full h-full md:w-1/2' />
        <div className='block text-wrap break-words px-4 py-12 mt-5'>
        <Image src="/assets/ieee-logo-white.svg" alt="logo" className="w-64 md:w-72 mb-10" width={1960} height={1080}/>

            <span className='text-[#d6d5e3] lg:text-[4rem] md:text-3xl text-3xl font-bold poppins'>{t("HACKERZSTREET")}</span>
            <span className='text-brand-green lg:text-[4rem] md:text-3xl poppins font-bold text-3xl'>{" "} {t('2')}</span>

            <span className='block text-[#d6d5e3] text-2xl font-medium'>{t('a_hackathon')}</span>
            <div className='h-20'></div>
            <div className="flex gap-2 text-brand-green text-3xl font-bold poppins">
                <span className="">{t("Rs.")}</span>

                <Counter value={40000} />

                {t("/-")}
            </div>
            <span className="block text-slate-300 text-xl font-medium">{t("Prize Pool")}</span>
            
        </div>

    </div>
}