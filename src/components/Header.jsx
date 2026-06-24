'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {

    const pathname = usePathname();


  return (
        <div className="navbar fixed top-0 right-0 left-0 flex justify-between px-8 py-4 bg-[#fdfbf7cc] backdrop-blur-sm items-center border-b-2 border-b-[#e8d9c51a] z-10">
        <div className="logo">
          <Link href={'/'} className="text-(--brand-color) italic text-2xl font-noto-serif">The Atelier</Link>
        </div>
        <menu className="flex gap-10 font-noto-serif">
         
          {links.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={` hover:text-(--brand-color) ${
              active ? 'text-(--brand-color) underline underline-offset-4' : 'text-[#333]'
            }`}
          >
            {label}
          </Link>
        );
      })}
        </menu>
        <Link href="/booking" className="bg-(--brand-color) rounded py-2 px-4 text-xs text-white tracking-wider ">BOOK NOW</Link>
      </div>
      )
}
