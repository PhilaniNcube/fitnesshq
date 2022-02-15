import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';

const links = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/abrahams6237/' },
  { icon: <FaWhatsapp />, href: 'https://www.whatsapp.com' },
  { icon: <FaTwitter />, href: 'https://twitter.com' },
];

const Social = () => {
  return (
    <div className="flex space-x-2 text-white">
      {links.map((link, i) => {
        return (
          <div
            key={i}
            className="h-8 w-8 rounded-full bg-white text-blue-600 flex items-center justify-center cursor-pointer"
          >
            <Link href={link.href} passHref>
              <a className="text-2xl">{link.icon}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
