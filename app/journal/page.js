
import { JournalContent } from '@/components/journalContent';
import 'animate.css'



export default function Journal() {
    const contentFont = "md:text-lg text-base text-gray-700 font-light my-3 md:my-4 md:mb-2 ";
    const contentFont2 = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";

    return (
        <main className=' bg-bgbg flex align-top flex-col items-center md:text-center  my-10 md:mx-16 lg:mx-32 md:my-10 lg:my-20'>
            <h1 className='text-3xl mx-10 md:text-4xl md:mb-6 lg:mb-7  lg:text-5xl text-gray-700 animate__animated animate__fadeInDown animate__delay-1s'>
                My Blog
            </h1>
            <p className={contentFont + "animate__animated animate__fadeIn animate__delay-2s mx-6"}>
                I'm not a professional or an experienced writer but I like to write poems, about my life or about stuff I find interesting, I also write short write-ups about my personal philosophies that I usually come up with after 4th joint (for legal reasons, that's a joke).
            </p>
            <p className={contentFont + "animate__animated animate__fadeIn animate__delay-2s mx-6"}>
                I'm also trying my hand in music, might update my progress here in the future. If you like to read, consider going through my posts and let me know what your think, you can mail me directly or just hit me up on one of my socials.
            </p>

            <div className='w-full items-start animate__animated animate__fadeIn animate__delay-2s'>
                <JournalContent/>
            </div>
        </main>
    )
}
