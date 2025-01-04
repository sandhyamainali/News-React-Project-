import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { BiSolidStopwatch } from "react-icons/bi";
function Homeversion() {
  return (
    <>
      <div className='container'>
            {/* SLider img start */}
            <div className="row">
              <div className="col-lg-8">
                <div className='img1'>
      
                  <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" />
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} />
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval={10000}>
                        <img className=".bg-dark.bg-gradient .bg-primary.bg-gradient img d-block w-100" src="https://utouchdesign.com/themes/envato/altroznews/images/news/lifestyle/health5.jpg"  alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className='btn btn-danger fs fw-bold'>Health</h5>
                          <p className='text-white text-bold    fs-5 fw-bold text-start'>Zhang Social Media Pop also know when smart innocent ......</p>
                          <h5 className='btn bg bg-secondary text-bold text-white fs fw-bold mx-3 '><span className='text-danger fs-6'><MdPeopleAlt /></span> John Wick</h5>
                          <h5 className='btn bg bg-secondary text-bold text-white fs fw-bold'> <span className='text-danger fs-6'><BiSolidStopwatch /></span>20 Jan,2022</h5>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval={2000}>
                        <img src="https://utouchdesign.com/themes/envato/altroznews/images/news/tech/gadget2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className='btn btn-danger fs fw-bold'>Gadget</h5>
                          <p className='text-bold fs-5 fw-bold text-white text-start'>Samsung gear s3 review: A whimper, when smartwatches need a bang</p>
                          <h5 className='btn bg bg-secondary text-bold text-white fs fw-bold mx-3 '><span className='text-danger fs-6'><MdPeopleAlt /></span> John Wick</h5>
                          <h5 className='btn bg bg-secondary text-bold text-white fs fw-bold'> <span className='text-danger fs-6'><BiSolidStopwatch /></span>20 Jan,2022</h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="https://utouchdesign.com/themes/envato/altroznews/images/news/lifestyle/travel5.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className='btn btn-danger fs fw-bold'>Travel</h5>
                          <p className='text-bold fs-5 fw-bold text-white text-start'>Zhang social media pop also know when smart innocent ......</p>
                          <h5 className='btn bg bg-secondary text-bold text-white fs fw-bold mx-3 '><span className='text-danger fs-6'><MdPeopleAlt /></span> John Wick</h5>
                          <h5 className='btn bg bg-secondary text-bold text-white fs fw-bold'> <span className='text-danger fs-6'><BiSolidStopwatch /></span>20 Jan,2022</h5>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
      
                </div>
      
      
              </div>
              {/* SLider img end*/}
      
              <div className="col-lg-4 ">
                <div>
                  <img className="w-100 n1 " src="https://utouchdesign.com/themes/envato/altroznews/images/news/tech/gadget2.jpg" alt="" />
                  {/* <div className='position-relative cap'>
                    <p>Samsung gear s3 review: A whimper, when smartwatches need a bang</p>
                  </div> */}
                </div>
                <img className="w-100 py-3 n2" src="https://utouchdesign.com/themes/envato/altroznews/images/news/lifestyle/health5.jpg" alt="" />
              </div>
            </div>
      
          </div>   
          </>
        )
      }
      
    

export default Homeversion
