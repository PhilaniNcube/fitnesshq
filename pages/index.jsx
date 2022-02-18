/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Fragment, useState } from 'react';
import FAQ from '../components/FAQ';
import {
  BsFillEnvelopeOpenFill,
  BsFillGeoAltFill,
  BsPhone,
} from 'react-icons/bs';

import Social from '../components/Social';
import Vision from '../components/Vision';

export default function Home() {
  const [faqShow, setFaqShow] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div className="bg-blue-800 h-screen relative">
        <div className="hidden md:block md:absolute min-w-1/2 top-0 right-0 h-[100vh] bg-white pointer-events-none overflow-hidden transition-all duration-300">
          {show && <Vision show={show} />}
          <img
            src="/images/rack.png"
            alt=""
            className="h-[100vh] w-[45vw] object-cover z-30"
          />
        </div>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          role="decoration"
          aria-hidden
          className="hidden absolute top-[28%] md:block md:right-[44.5%] md:w-[15px] bg-yellow-400 md:h-[50%] cursor-pointer"
        ></div>
        <div className="max-w-6xl mx-auto z-40">
          <div className="flex flex-col h-[100vh] w-full sm:w-2/3 md:w-1/2 px-4 md:pr-10 justify-center space-y-8">
            <h1 className="text-xl md:text-4xl lg:text-5xl tracking-wider font-extrabold text-white">
              Exercise is more than just physical appearance
            </h1>
            <p className="text-xs md:text-base mt-4 text-md font-light leading-5 text-white">
              I was inspired to create a safe space for people to allow
              themselves to exceed their capabilities. A safe space to show them
              they can create a healthy lifestyle and actually enjoy the
              benefits of a healthy lifestyle.
            </p>
            <Social />
          </div>
        </div>
      </div>
      <div className="relative isolate min-h-[100vh] w-[screen] bg-hero-lg bg-no-repeat bg-center bg-cover">
        <div className="max-w-6xl mx-auto ">
          <div className="flex flex-col min-h-[100vh] w-full sm:w-2/3 md:w-1/2 px-4 md:pr-10 justify-center space-y-2 md:space-y-4 relative">
            <div
              onMouseEnter={() => setFaqShow(true)}
              onMouseLeave={() => setFaqShow(false)}
              role="decoration"
              aria-hidden
              className="hidden md:block absolute bg-yellow-400 top-[45%] -right-[11%] py-2 px-8"
            >
              <p className="text-blue-600 font-bold text-2xl">FAQ</p>
              {faqShow && <FAQ />}
            </div>
            <h1 className="text-xl md:text-4xl lg:text-5xl tracking-wider font-extrabold text-white">
              Why choose FITNESS HQ?
            </h1>
            <p className="text-xs md:text-base mt-1 text-md font-bold leading-5 text-white">
              Our club is easily accessible and affordable.
            </p>
            <p className="font-bold text-white">Types of exercises</p>
            <ul className="text-white list-disc pl-4 text-sm font-light">
              <li>One on one training</li>
              <li>Group Training</li>
              <li>Call out sessions</li>
              <li>Intensive nutritional plan</li>
              <li>Pop up Bootcamp</li>
              <li>Coaching</li>
              <li>Weight loss & weight gain programmes</li>
              <li>Circuit Training</li>
              <li>Specialised fat-burning Cardiovascular Training</li>
            </ul>
            <Social />
          </div>
        </div>
      </div>
      <div id="contact" className="min-h-[100vh] flex">
        <div className="bg-hero-contact bg-sky-600 bg-blend-multiply bg-center bg-no-repeat bg-cover w-[54.5%] flex flex-col justify-center items-center px-8">
          <h2 className="text-yellow-400 font-extrabold text-2xl md:text-4xl">
            Contact Us
          </h2>
          <ul className="w-full md:w-1/2 md:pl-24 mt-6 justify-self-center flex flex-col space-y-4">
            <li className="flex justify-start items-center text-md text-white space-x-3">
              <span className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                <BsPhone />
              </span>{' '}
              <p>084 023 0071</p>
            </li>
            <li className="flex justify-start items-center text-md text-white space-x-3">
              <span className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                <BsFillEnvelopeOpenFill />
              </span>{' '}
              <p>info@fitnesshq.co.za</p>
            </li>
            <li className="flex justify-start items-center text-md text-white space-x-3">
              <span className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                <BsFillGeoAltFill />
              </span>{' '}
              <p>4 First Avenue , Windvogel, Port Elizabeth, 6001</p>
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.7712953769133!2d25.54474731492352!3d-33.89554352787809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad6957bc6ce39%3A0xda19c41cc2b4d085!2s4%201st%20Ave%2C%20Windvogel%2C%20Bethelsdorp%2C%206059!5e0!3m2!1sen!2sza!4v1645039473868!5m2!1sen!2sza"
          className="flex-1"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </Fragment>
  );
}
