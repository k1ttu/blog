'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import React from "react";

export default function Navbar3() {
    const [show, setShow] = useState(false);
    const navlink2 = " text-2xl text-gray-600 my-3 animate__animated";
    const navlink = "text-sm no-underline text-gray-600 font-mono relative text-gray-700 py-3 pb-1 px-2 after:bg-gray-400 after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
    const navlink_ = "text-sm no-underline text-gray-600 font-mono relative text-gray-700 py-3 pb-1 px-2 after:bg-gray-400 after:absolute after:top-10 after:h-0.5 after:w-0 after:bottom-0  after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
    const navhover_ = "relative py-3 text-sm font-base pb-1 font-mono px-6 after:bg-gray-600 after:absolute md:after:w-0 after:h-px after:w-fit after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
    const navHover = "relative after:bg-gray-600 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(!show);

    const navbarDB = [
        {
            title: "About",
            id: "about",
            link: "/about"
        },
        {
            title: "Blog",
            id: "Blog",
            link: "/journal"
        },
        {
            title: "Contact",
            id: "Contact",
            link: "mailto:chirag.kun@icloud.com"
        }
    ]
    const router = useRouter();

    return (
        <nav className='flex justify-between h-px md:mx-16 md:py-10 mx-8 py-4 animate__animated animate__fadeInDown'>

            <Link href="/" className={navlink_}>
                Chirag
            </Link>

            <ul className='md:flex hidden list-none '>
                {
                    navbarDB.map((item, index) => {
                        if (index != 2) {
                            return (
                                <li key={index} className={'mr-5 '} >
                                    <Link href={item.link} className={navlink}>

                                        {item.title}

                                    </Link>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li key={index} className={'mr-0'} >
                                    <Link href={item.link} className={navlink}>
                                        {item.title}
                                    </Link>

                                </li>
                            )
                        }
                    }
                    )
                }


            </ul>

            <button className='block md:hidden cursor-pointer w-9 h-9 bg-none appearance-none relative' variant="primary" onClick={handleShow}>
                <div className={"bar block h-[3px] w-full rounded-md my-1 bg-black "} ></div>
                <div className={"bar block h-[3px] w-full rounded-md my-1 bg-black "}></div>
                <div className={"bar block h-[3px] w-full rounded-md bg-black my-1 "}></div>
            </button>

            <Offcanvas className="md:hidden block bg-bgbg" show={show} onHide={handleShow} placement='start' responsive='md'>
                <Offcanvas.Header className=' bg-bgbg' closeButton >
                </Offcanvas.Header>
                <Offcanvas.Body className='md:hidden bg-bgbg visible'>
                    <ul className=''>
                        {
                            navbarDB.map((item, index) => (
                                <li key={index} className={' my-10'} onClick={handleClose} >
                                    <Link href={item.link} className={"text-2xl  font-mono no-underline text-gray-600 "}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                            )
                        }
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>


        </nav>

    );
}
