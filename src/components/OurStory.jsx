import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images } from '../constant';
import Counters from './Counters';

gsap.registerPlugin(ScrollTrigger);

export default function OurStorySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const personImgRef = useRef(null);
  const girlImgRef = useRef(null);
  const smallGirlImgRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const personImg = personImgRef.current;
    const girlImg = girlImgRef.current;
    const smallGirlImg = smallGirlImgRef.current;
    const desc = descRef.current;

    gsap.fromTo(heading, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: section, start: "top 80%" } }
    );

    gsap.fromTo(personImg,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, scrollTrigger: { trigger: section, start: "top 60%" } }
    );

    gsap.fromTo(girlImg,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.7, scrollTrigger: { trigger: section, start: "top 60%" } }
    );

    gsap.fromTo(smallGirlImg,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.9, scrollTrigger: { trigger: section, start: "top 60%" } }
    );

    gsap.fromTo(desc,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.1, scrollTrigger: { trigger: section, start: "top 40%" } }
    );

  }, []);

  return (
    <div className="container-fluid py-5" ref={sectionRef}>
      <div className="container">
        <div className='row gx-0'>
          <div className='col-xl-1 p-0'></div>
          <div className='col-xl-10 p-0'>
            <h6 className="small-heading">OUR STORY</h6>
            <h1 className="service-cards-heading mb-5" ref={headingRef}>
              We know how everything works<br />
              and why your business is failing<br />
              over and over again.
            </h1>
            
            <div className="row">
              <div className="col-lg-6 mt-0 mt-lg-5">
                <div className="position-relative">
                  <img className='person-img' src={images.personImage} ref={personImgRef} alt="Person"/>
                </div>
              </div>
              <div className="col-lg-6 ps-2 mb-0 mb-lg-5 pt-lg-0 pt-5">
                <div className='images-container'>
                  <div className='d-flex gap-5 gap-lg-3'>
                    <img src={images.girlImage} alt='girl-img' className='girl-img me-xl-5' ref={girlImgRef}/>
                    <div className='d-flex justify-content-center align-items-center'>
                      <img src={images.smallGirlImage} alt='small-girl-img img-fluid' className='small-girl-img d-none d-md-block' ref={smallGirlImgRef}/>
                    </div>
                  </div>
                </div>

                <div className='desc-container pt-lg-5'>
                  <p className="mt-5 text-muted text-center" style={{ textAlign: 'pretty'}} ref={descRef}>
                    We share common trends and strategies for improving your
                    rental income and making sure you stay in high demand. With
                    lots of unique blocks, you can easily build a page without
                    coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </div>
            <Counters/>
          </div>
          <div className='col-xl-1 p-0'></div>
        </div>
      </div>
    </div>
  )
}