import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Footer() {
    return (
        <div className='container bg-dark text-white'>
            <div className="row">
                <div className="col-lg-4">
                    <h4 className='px-3 py-3'>About Us</h4>
                    <ul>
                        <li className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consectetur!</li>
                        <li className='py-2'><FaHome className='text-danger' /> 15 Cliff St, New York NY 10038, USA</li>
                        <li className='py-2'><FaPhoneAlt className='text-danger' /> +91 234 567 8765</li>
                        <li className='py-2'><IoMdMail className='text-danger' />  mail@example.com</li>
                        <ul className='d-flex gap-3 py-3'>
                        <li className='b'> <FaFacebookF className='text-danger'/></li>
                        <li className='b'><FaTwitter className='text-danger'/></li>
                        <li className='b'><FaGooglePlusG className='text-danger'/></li>
                        <li className='b'><FaLinkedinIn className='text-danger'/></li>
                        </ul>
                    </ul>

                </div>
                <div className="col-lg-4">
                    <h4 className='px-3 py-3'>Popular Categories</h4>
                    <ul className='py-3'>
                     <li className='py-2'><MdKeyboardDoubleArrowRight />Make-Up(05)</li>
                        <li  className='py-2'><MdKeyboardDoubleArrowRight />Health(06)</li>
                        <li  className='py-2'><MdKeyboardDoubleArrowRight />Audio(15)</li>
                        <li  className='py-2'><MdKeyboardDoubleArrowRight />Travel(25)</li>
                        <li className='py-2'><MdKeyboardDoubleArrowRight />Health(05)</li>
                        <li  className='py-2'><MdKeyboardDoubleArrowRight />Gadgets(12)</li>
                        <li  className='py-2'><MdKeyboardDoubleArrowRight /> Food</li>
                    </ul>

                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}

export default Footer
