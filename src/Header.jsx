import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Header() {
    return (
        <div>
            <section className='bg-dark container  py-2 top'>
                <div>
                    <div className="row ">
                        <div className="col-lg-3 ">
                        <button className='btn bg-danger text-white text-bold px-2 '>Login & SignUp</button>
                        </div>
                        <div className="col-lg-6 offset-3 text-white  ">
                            <ul className='d-flex gap-3 media '>
                                <li className='a'> <FaFacebookF /></li>
                                <li className='a'><FaTwitter /></li>
                                <li className='a'><FaGooglePlusG /></li>
                                <li className='a'><FaLinkedinIn /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
<section className='mid container py-3'>
    <div className="row">
        <div className="col-lg-6">
            <img  src="http://utouchdesign.com/themes/envato/altroznews/images/logo.png" alt="" />
        </div>
        <div className="col-lg-6">
            <img className='w-100' src="http://utouchdesign.com/themes/envato/altroznews/images/banner-ads/ad-top-header.png" alt="" />
        </div>
    </div>

</section>

        </div>
    )
}

export default Header
