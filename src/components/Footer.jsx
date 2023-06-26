import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer'>

            <div>
                <div className='logoDiv'>
                    <h1 className="logoFooter">
                        <strong>Job</strong>Recruit
                    </h1>
                </div>
                <p className="text-white pb-[13px] opacity-70 leading-7" >
                    We always make our seekers and companies find the best jobs and employers find the best candidates.
                </p>
            </div>

            <div className='grid'>
                <span className='divTitle'>
                    Company
                </span>
                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
                </div>
            </div>
            <div className='grid'>
                <span className='divTitle'>
                    Resources
                </span>
                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
                </div>
            </div>
            <div className='grid'>
                <span className='divTitle'>
                    Support
                </span>
                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
                </div>
            </div>
            <div className='grid'>
                <span className='divTitle'>
                    Contact Info
                </span>
                <div>
                    <small className="text-[14px] text-white">
                        abhipsha2022@gmail.com
                    </small>
                    <div className="icons flex gap-4 py-[1rem]">
                        <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-darkPurple' />
                        <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-darkPurple' />
                        <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-darkPurple' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
