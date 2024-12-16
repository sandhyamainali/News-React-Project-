import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Home2 from './Home2';

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
                {/* mid section */}
            </section>
            <section className='mid container py-3'>
                <div className="row">
                    <div className="col-lg-6">
                       <Link to="/"><img src="http://utouchdesign.com/themes/envato/altroznews/images/logo.png" alt="" /> </Link>
                       
                    </div>
                    <div className="col-lg-6">
                        <img className='w-100' src="http://utouchdesign.com/themes/envato/altroznews/images/banner-ads/ad-top-header.png" alt="" />
                    </div>
                </div>

            </section>
            {/* navbar start */}
            <section className='container py-3'>
                <div className="row border-top border border-danger border-2 border-top">

                    <div className="col-lg-8">
                        <ul className='d-flex gap-4 py-2 '>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle text-uppercase text-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                </a>
                                <ul class="dropdown-menu ">
                                   <Link to="/"><li><a class="dropdown-item c" href="#"> <MdKeyboardDoubleArrowRight /> Home Version One</a></li></Link> 
                                   <Link to="/Home2"> <li><a class="dropdown-item c" href="#"> <MdKeyboardDoubleArrowRight /> Home Version Two</a></li></Link>
                                    <li><a class="dropdown-item c" href="#"> <MdKeyboardDoubleArrowRight /> Home Version Three</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown  ">
                                <a class="nav-link dropdown-toggle text-uppercase text-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    LifeStyle
                                </a>
                                <ul class="dropdown-menu">
                                    <div className="row">
                                    <div className="">
                                    <li><a class="dropdown-item c" href="#"> <MdKeyboardDoubleArrowRight /> Health</a></li>
                                    <li><a class="dropdown-item c" href="#"> <MdKeyboardDoubleArrowRight /> Travel</a></li>
                                    <li><a class="dropdown-item c" href="#"> <MdKeyboardDoubleArrowRight /> Food</a></li>
                                    </div>
                                    </div>
                                   
                                </ul>
                            </li>
                            <li className=' text-uppercase text-bold'>Technology</li>
                            <li className=' text-uppercase text-bold'>Video</li>
                            <li className=' text-uppercase text-bold'>About Us</li>
                            <li class="nav-item dropdown  ">
                                <a class="nav-link dropdown-toggle text-uppercase text-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Feature
                                </a>
                                <ul class="dropdown-menu">
                                    <div className="row">
                                    <div className="">
                                    <li><a class="dropdown-item c" href="#"> <MdKeyboardDoubleArrowRight /> Category</a></li>
                                    <li><a class="dropdown-item c" href="#"> <MdKeyboardDoubleArrowRight /> Post Details Page</a></li>
                                    <li><a class="dropdown-item c" href="#"> <MdKeyboardDoubleArrowRight /> Page</a></li>
                                    </div>
                                    </div>
                                   
                                </ul>
                            </li>
                           
                           
                        </ul>
                    </div>
                    <div className="col-lg-3 offset-1 text-white p-2 d-flex text-end">
                        <IoSearchOutline className=' bg-danger search' />
                    </div>

                </div>
            </section>

            {/* navbar end */}


        </div>
    )
    
}
<><Routes>
    <Route path='/' element={<Home />} />
    
    
    <Route path="/" element={<Home/>}/>
    <Route path="/Home2" element={<Home2/>}/>

</Routes>
</>


export default Header
