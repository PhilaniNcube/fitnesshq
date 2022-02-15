/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';
import Social from '../components/Social';

const links = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/abrahams6237/' },
  { icon: <FaWhatsapp />, href: 'https://www.whatsapp.com' },
  { icon: <FaTwitter />, href: 'https://twitter.com' },
];

export default function Home() {
  return (
    <div className="bg-blue-800 h-screen relative">
      <div className="hidden md:block md:absolute min-w-1/2 top-0 right-0 h-[100vh] bg-white pointer-events-none">
        <img
          src="/images/rack.webp"
          alt=""
          className="h-[100vh] w-[45vw] object-cover z-30"
        />
      </div>
      <div
        role="decoration"
        aria-hidden
        className="hidden absolute top-[28%] md:block md:right-[44.5%] md:w-[15px] bg-yellow-400 md:h-[50%] pointer-events-none"
      ></div>
      <div className="max-w-6xl mx-auto z-40">
        <div className="flex flex-col h-[100vh] w-full sm:w-2/3 md:w-1/2 px-4 md:pr-10 justify-center space-y-8">
          <h1 className="text-xl md:text-4xl lg:text-5xl tracking-wider font-extrabold text-white">
            Exercise is more than just physical appearance
          </h1>
          <p className="text-xs md:text-base mt-4 text-md font-light leading-5 text-white">
            I was inspired to create a safe space for people to allow themselves
            to exceed their capabilities. A safe space to show them they can
            create a healthy lifestyle and actually enjoy the benefits of a
            healthy lifestyle.
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
}
