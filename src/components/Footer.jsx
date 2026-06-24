import Link from 'next/link'

export default function Footer() {
  return (
     <footer className="bg-[#f5f3ef] py-16 px-12 flex justify-between items-center mt-12">
        <div className="footer-logo">
          <a href="/" className="font-noto-serif text-(--brand-color) text-lg">The Atelier</a>
          </div>
          <div className="footer-links text-xs text-[#4d4635] flex gap-8 tracking-[.075rem]">
            <a href="/404">INSTAGRAM</a>
            <a href="/404">PINTEREST</a>
            <a href="/404">PRIVACY</a>
            <a href="/404">TERMS</a>
            </div>
            <p className="footer-copyright text-xs text-[#4d4635] tracking-[.075rem]">© 2024 THE ATELIER. DEFINED BY ELEGANCE.</p>
            
            </footer>
  )
}
