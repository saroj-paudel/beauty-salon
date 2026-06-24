'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const links = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {

    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
        <div className="navbar fixed top-0 right-0 left-0 flex justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-[#fdfbf7cc] backdrop-blur-sm items-center border-b-2 border-b-[#e8d9c51a] z-10">
        <div className="logo">
          <Link href={'/'} className="text-(--brand-color) italic text-lg md:text-2xl font-noto-serif">The Atelier</Link>
        </div>
        
        {/* Desktop Menu */}
        <menu className="hidden md:flex gap-10 font-noto-serif">
         
          {links.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={` hover:text-(--brand-color) text-sm ${
              active ? 'text-(--brand-color) underline underline-offset-4' : 'text-[#333]'
            }`}
          >
            {label}
          </Link>
        );
      })}
        </menu>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center p-2 h-12 w-12 touch-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          type="button"
        >
          {mobileMenuOpen ? (
            <MdClose className="text-2xl text-(--brand-color)" />
          ) : (
            <GiHamburgerMenu className="text-2xl text-(--brand-color)" />
          )}
        </button>

        <Link href="/booking" className="hidden md:block bg-(--brand-color) rounded py-2 px-4 text-xs text-white tracking-wider">BOOK NOW</Link>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#fdfbf7cc] backdrop-blur-sm border-b-2 border-b-[#e8d9c51a] md:hidden">
            <menu className="flex flex-col gap-4 font-noto-serif p-4">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={` hover:text-(--brand-color) text-sm ${
                      active ? 'text-(--brand-color) underline underline-offset-4' : 'text-[#333]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link href="/booking" className="bg-(--brand-color) rounded py-2 px-4 text-xs text-white tracking-wider text-center" onClick={() => setMobileMenuOpen(false)}>BOOK NOW</Link>
            </menu>
          </div>
        )}
      </div>
      )
}
