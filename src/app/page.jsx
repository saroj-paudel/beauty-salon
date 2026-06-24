import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdFaceRetouchingNatural } from "react-icons/md";

export default function Home() {
  return (


      <main className="mt-16.5">

        <section id="hero" className="min-h-[calc(100vh-66px)] flex items-center py-8 md:py-16">
          <div className="container grid grid-cols-1 md:grid-cols-12 px-4 sm:px-6 md:px-20 place-items-center gap-6 md:gap-0">
            <div className="md:col-span-5 w-full">

              <span className="text-(--brand-color) font-bold tracking-[.2em] text-xs md:text-sm">THE ART OF SUBTLETY</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-noto-serif my-4 md:my-5">Etherial Beauty,<br /><span className="text-(--brand-color)">Refined.</span></h1>
              <p className="text-base sm:text-lg md:text-lg text-[#4d4635]">An curated experience where English heritage meets Asian minimalism. We celebrate the architecture of your face through intentional makeup artistry.</p>
              <div className="btn-group flex flex-col sm:flex-row gap-2 mt-4">
                <Link href='/booking' className="bg-(--brand-color) rounded py-2 px-4 text-xs/5 text-white tracking-wider font-bold text-center">BOOK YOUR SESSION</Link>
                <Link href='/portfolio' className="py-2 px-4 text-(--brand-color) text-xs/5 tracking-wider flex items-center justify-center sm:justify-start gap-2 font-bold">VIEW PORTFOLIO <FaArrowRight /></Link>
              </div>
            </div>
            <div className="md:col-span-7 h-64 sm:h-80 md:h-[calc(100vh-100px)] w-full">
              <img src="https://bty-salon.netlify.app/_next/static/media/hero-picture.0rwh5wqfhz_qc.png" alt="" className="[clip-path:polygon(5%_0%,100%_0%,95%_100%,0%_100%)] h-full w-full object-cover block" />
            </div>
          </div>
        </section>

        <section id="brandphilosophy" className="bg-[#f5f3ef]">
          <div className="container flex flex-col md:flex-row justify-between py-12 md:py-24 px-4 sm:px-6 md:px-16 gap-6 md:gap-0">
            <h2 className="text-(--brand-color) font-noto-serif italic text-2xl md:text-3xl flex-shrink-0">The Atelier Philosophy</h2>
            <div className="w-full md:w-2/3">
              <p className="text-[#4d4635] text-lg md:text-2xl font-light mb-6">We believe makeup is not a mask, but a dialogue. Our studio specializes in high-clarity skin finishes and bespoke color theory, bridging the gap between bold editorial concepts and the soft radiance of Eastern beauty standards.</p>
              <Link href={'/about'} className="text-(--brand-color) border-b-[#725a394d] border-b-2 text-xs tracking-wider font-bold">LEARN OUR STORY</Link>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container py-12 md:py-24 px-4 sm:px-6 md:px-16">
            <div className="flex flex-col sm:flex-row justify-between mb-8 md:mb-12 gap-4"><h2 className="text-3xl sm:text-4xl">Curated Services</h2> <span className="text-(--brand-color) text-xs md:text-base">EXCELLENCE IN ARTISTRY</span></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">

              <div className="md:col-span-2 h-64 sm:h-80 md:h-112.5 overflow-hidden relative rounded-sm">
                <div className="overlay absolute bg-[linear-gradient(#00000000,#000000AA)] h-full flex justify-end pl-4 sm:pl-8 pb-4 sm:pb-8 flex-col w-full">
                  <h3 className="text-white text-2xl sm:text-3xl mb-4">The Bridal Edit</h3>
                  <p className="text-white text-xs sm:text-sm md:w-1/3">Timeless, luminous artistry designed to
                    capture your most authentic self.</p>
                </div>
                <img src="https://bty-salon.netlify.app/_next/static/media/hero-picture2.230oyeyyoszhr.png" alt="" className="w-full object-cover h-full" />

              </div>

              <div className="rounded-sm bg-[#EAE8E4] p-6 sm:p-10 flex flex-col gap-6">
                <MdFaceRetouchingNatural className="text-(--brand-color) text-4xl" />
                <h3 className="text-xl sm:text-2xl">Personal Bespoke</h3>
                <p className="text-[#4D4635] text-sm sm:text-base">Tailored sessions for high-profile events, portraits, or discovering your signature look.</p>
                <span className="text-(--brand-color) text-xs sm:text-sm font-bold">FROM £150</span>
              </div>


              <div className="rounded-sm overflow-hidden h-64 sm:h-80 md:max-h-92.5">
                <img src="https://bty-salon.netlify.app/_next/static/media/services-pic1.0stvejdabc51u.png" alt="" className="h-full w-full object-cover" />
              </div>

              <div className="md:col-span-2 rounded-sm bg-white shadow-2xs h-full flex items-center justify-center flex-col gap-4 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl">Creative & Editorial</h3>
                <p className="text-[#4D4635] md:w-2/3 text-center text-sm sm:text-base">Pushing boundaries for fashion campaigns, film, and conceptual beauty photography. Our work has been featured in international glossies.</p>
                <button className="text-(--brand-color) border border-(--brand-color) rounded-lg px-4 py-2 text-xs font-bold tracking-wider">INQUIRE FOR PROJECTS</button>
              </div>

            </div>


          </div>
        </section>


        <section id="cta">
          <div className="mx-4 sm:mx-6 md:mx-16 bg-[#725A39] p-6 sm:p-8 md:p-16 rounded-md flex items-center justify-center flex-col text-center gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white">Elevate Your Beauty <br />
              <span className="italic">Experience.</span></h2>
            <p className="text-white text-sm sm:text-base">Limited weekend availability. We recommend booking at least 4 weeks in advance for bridal services.</p>
            <button className="bg-white px-6 sm:px-8 py-3 sm:py-4 rounded text-[#725A39] font-bold text-sm sm:text-base">RESERVE NOW</button>
          </div>
        </section>

      </main>



  );
}

export const metadata = {
  title: 'Home - The Atelier',
};