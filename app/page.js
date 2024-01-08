import './globals.css';
import JournalTopics from '@/components/journalHeading';

import 'animate.css';
import Link from 'next/link';


export default function Home() {
  const contentFont = "md:text-lg text-base text-gray-700 font-light no-underline";
  return (
    <>
      <main className='flex flex-col mx-10 md:mx-16 md:my-40 my-36 lg:my-36 animate__animated animate__fadeIn animate__delay-1s'>
        <div className='mt-auto animate__animated animate__fadeinUp'>
          <p className='animate__animated animate__fadeInLeft text-sm md:text-lg md:my-4 text-gray-800 text-left font-light my-0 '>
            Recent Posts
          </p>
          <div className='animate__animated animate__fadeIn animate__delay-1s md:my-4  px-0 mx-0'>
            <JournalTopics />
          </div>
        </div>

      </main>
      <hr className=' mx-10 md:mt-32 md:mx-16 fill-gray-600 ' />
      <footer className=' mt-auto bottom-0  mx-10 md:mx-16 '>
        <div>

        </div>
        <ul className='list-none hidden md:flex items-start py-10'>

          <li>
            <Link className={contentFont } href="mailto:chirag/kun@icloud.com">
              <span className='relative md:after:w-0 text-gray-700 text-md md:text-xl py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-full after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer no-underline'>Mail</span>
            </Link>
          </li>
          <li>
            <Link className={contentFont } href="https://www.linkedin.com/in/chirag-sharma-0551a1260/">
              <span className='relative text-md text-gray-700 md:text-xl py-3 pb-1 px-6 no-underline after:bg-gray-600 after:absolute after:h-px md:after:w-0 after:w-full after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link className={contentFont } href="https://github.com/k1ttu">
              <span>
              
              </span>
              <span className='relative text-md text-gray-700 md:text-xl py-3 pb-1 px-6 no-underline after:bg-gray-600 after:absolute md:after:w-0 after:h-px after:w-full after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>GitHub</span>
            </Link>
          </li>
        </ul>
        <ul className='list-none flex md:hidden items-start'>

          <li>
            <Link className={contentFont } href="mailto:chirag/kun@icloud.com">
              <span className='text-base no-underline mx-2'>Mail</span>
            </Link>
          </li>
          <li>
            <Link className={contentFont + "no-underline"} href="https://www.linkedin.com/in/chirag-sharma-0551a1260/">
              <span className='text-base no-underline mx-2'>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link className={contentFont + "no-underline "} href="https://github.com/k1ttu">
              <span className='text-base no-underline mx-2'>GitHub</span>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}