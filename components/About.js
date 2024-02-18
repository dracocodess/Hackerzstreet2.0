import Image from "next/image";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import ANIM_STATE_SECTION from "../anim/section";

export default function About() {
    const {t} = useTranslation()
    return <motion.div
        variants={ANIM_STATE_SECTION}
        whileInView="whileInView"
        initial="initial"
        className="relative rounded-[33px] w-full items-center block overflow-hidden md:pb-12 md:px-12 px-4 pb-4 bg-gradient-31
        from-[#BC5A78] to-[#F0816C] py-10 z-[-10]">
        <div className="overflow-hidden w-fit mx-auto relative rounded-md m-5">
            <div id="header-section-about"
                 className="w-0 bg-orange-300 rounded-md h-full absolute -z-10"></div>
            <h1 className="text-6xl font-bold poppins text-center mx-auto z-20">{t('About Us')}</h1>
        </div>
        <div className="flex items-center w-full h-full md:gap-10 flex-col md:flex-row">
            <Image src='https://ieeecsmuj.vercel.app/_next/static/media/IEEE-logo-about.21c3a92d.svg'
                   alt="IEEE CS Color Logo"
                   width={1920} height={1080} className="md:w-96 md:h-96 h-52 w-52"/>
            <div className='h-96 w-0.5 bg-gray-100/10 hidden md:block'/>
            <p className="text-md md:leading-relaxed"><span
                className="block text-xl poppins font-bold mb-5">{t('IEEE Computer Society')}</span>

                {t(`Serving computing at its best with inclusion and diversity” is the prime motto of the IEEE Computer
                    Society. This society was created keeping in mind IEEE’s continued commitment to providing options at
                    best. The IEEE Computer Society is driven by the central goals of equity, diversity, inclusion, and
                    yearn to serve computing at its perfection.

                    With an intent to expand the IEEE’s reach and learnings, this society was started a year back in early
                    2020. Since then, society has tried every possible course of action by conducting diverse events such as
                    webinars, competitions, workshops, and mentorship programs to set a goal for the young achievers. The
                    members of IEEE CS have been skilled and earned minimal expertise in roughly all possible sub-sections
                    of CS via our accelerator program. The senior student mentors steer them on each stage they take and
                    deliver them with the professional material for further reference.

                    We aim to proactively support diversity and inclusion by being the premier source for information,
                    inspiration, and collaboration in computer science and engineering. Connecting members on campus, this
                    IEEE Computer Society empowers the students who wish to advance in technology by delivering tools at all
                    stages of their professional careers.

                    “Computer science is the operating system for all innovations.” At IEEE CS, we look at it similarly,
                    trying to make a better world by working as a team.`)}
            </p>
        </div>
    </motion.div>
}