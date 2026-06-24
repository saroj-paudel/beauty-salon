import Link from 'next/link'

export default function Footer() {
  return (
     <footer className="bg-[#f5f3ef] py-8 md:py-16 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mt-12 text-center md:text-left">
        <div className="footer-logo">
          <a href="/" className="font-noto-serif text-(--brand-color) text-lg">The Atelier</a>
          </div>
          <div className="footer-links text-xs text-[#4d4635] flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 tracking-[.075rem]">
            <a href="/404">INSTAGRAM</a>
            <a href="/404">PINTEREST</a>
            <a href="/404">PRIVACY</a>
            <a href="/404">TERMS</a>
            </div>
            <p className="footer-copyright text-xs text-[#4d4635] tracking-[.075rem] order-last md:order-none w-full md:w-auto">© 2024 THE ATELIER. DEFINED BY ELEGANCE.</p>
            
            </footer>
  )
}
