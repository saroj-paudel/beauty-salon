import { GoLocation } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
   

      <main className="mt-16">
                 <section className="flex flex-col lg:flex-row p-4 sm:p-6 md:p-8 justify-between items-end gap-6 md:gap-12">
                   <div className="flex flex-col gap-3 md:gap-4">
                     <span className="text-[#a07c4c] font-medium tracking-[.15rem] uppercase text-xs md:text-sm">GET IN TOUCH</span>
                     <h1 className="text-4xl sm:text-5xl lg:text-6xl lg:text-7xl leading-[1.05]">
              Let’s capture your <br />
              <span className="text-[#a07c4c]">natural radiance.</span>
            </h1>
                     <p className="text-(--brand-color) max-w-xl text-sm md:text-base leading-7">
              Whether you're preparing for a gala, a wedding, or an editorial
              session, our artists are here to curate a look that is uniquely
              yours. Visit our London studio for a consultation.
            </p>
          </div>
                   <div className="w-full md:w-auto h-48 sm:h-64 lg:h-auto lg:flex-shrink-0">
                     <img src="https://bty-salon.netlify.app/_next/static/media/hero-contact.1l0z-ss3n_8vx.png" className="h-full w-full object-cover"></img>
          </div>
        </section>

                 <section className="p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-12 mt-12 md:mt-20">
                   <div className="flex-1 min-w-0 flex flex-col gap-4 md:gap-6">
                     <address className="flex gap-6 md:gap-10 flex-col not-italic">
                       <div className="flex gap-3 md:gap-4">
                         <div className="icon flex-shrink-0">
                  <GoLocation className="text-(--brand-color) text-2xl"/>
                </div>
                         <div className="details min-w-0">
                           <h3 className="text-lg md:text-xl mt-0 mb-1 md:mb-2">The London Studio</h3>
                           <p className="text-(--brand-color) max-w-3xs text-sm md:text-base break-words">42 Mayfair Gardens, London W1K 3AH, United Kingdom</p>
                </div>
              </div>
                       <div className="flex gap-3 md:gap-4">
                         <div className="icon flex-shrink-0">
                  <MdOutlineCall className="text-(--brand-color) text-2xl"/>
                </div>
                <div className="details">
                           <h3 className="text-lg md:text-xl mt-0 mb-1 md:mb-2">Inquiries</h3>
                           <p className="text-(--brand-color) max-w-3xs text-sm md:text-base">+44 20 7946 0128</p>
                </div>
              </div>
                       <div className="flex gap-3 md:gap-4">
                         <div className="icon flex-shrink-0">
                  <BiEnvelope className="text-(--brand-color) text-2xl"/>
                </div>
                         <div className="details min-w-0">
                           <h3 className="text-lg md:text-xl mt-0 mb-1 md:mb-2">Email</h3>
                           <p className="text-(--brand-color) max-w-3xs text-sm md:text-base break-all">concierge@theatelier.co.uk</p>
                </div>
              </div>
            </address>

                     <div className="map w-full h-48 md:h-64 overflow-hidden rounded-md">
              <img src="https://bty-salon.netlify.app/_next/static/media/map.2dgiwhoicnnz2.png"  className="object-cover w-full h-full" />
            </div>
                     <div className="pt-6 md:pt-8 border-t border-t-[#d0c5af33]">
                       <span className="text-(--brand-color) tracking-widest text-xs md:text-sm uppercase">FOLLOW OUR PROCESS</span>
                       <div className="flex gap-6 md:gap-8 mt-4 md:mt-6">
                         <Link href={"/404"} className="text-(--brand-color) font-medium text-sm md:text-base">Instagram</Link>
                         <Link href={"/404"} className="text-(--brand-color) font-medium text-sm md:text-base">Pinterest</Link>
                         <Link href={"/404"} className="text-(--brand-color) font-medium text-sm md:text-base">LinkedIn</Link>
              </div>
            </div>
          </div>




          <div className="bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)] rounded-xl w-full lg:w-170 px-4 sm:px-6 md:px-8 lg:px-12 pt-8 md:pt-12 pb-12 md:pb-16">
                     <h2 className="text-2xl md:text-3xl mb-6 md:mb-10">Send an Inquiry</h2>
            <form action="">
                       <div className="grid gap-4 md:gap-6">
                         <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                           <div className="grid gap-3 md:gap-4">
                             <label htmlFor="fullname" className=" font-normal tracking-[.8px] text-(--brand-color) uppercase text-xs md:text-sm">FULL NAME</label>
                    <input
                               className="w-full border-b border-[#d0c5af] bg-transparent py-3 md:py-4 text-sm md:text-base text-[#1d1b17] outline-none placeholder:text-[#9a8f7e] focus:border-[#a07c4c] transition"
                      type="text"
                      id="fullname"
                      placeholder="Barak Obama"
                    />
                  </div>
                           <div className="grid gap-3 md:gap-4">
                             <label htmlFor="email" className=" font-normal tracking-[.8px] text-(--brand-color) uppercase text-xs md:text-sm">EMAIL ADDRESS</label>
                    <input
                               className="w-full border-b border-[#d0c5af] bg-transparent py-3 md:py-4 text-sm md:text-base text-[#1d1b17] outline-none placeholder:text-[#9a8f7e] focus:border-[#a07c4c] transition"
                      type="email"
                      id="email"
                      placeholder="obama@washing.us"
                    />
                  </div>
                </div>

                         <div className="grid gap-3 md:gap-4">
                           <label htmlFor="servicetype" className=" font-normal tracking-[.8px] text-(--brand-color) uppercase text-xs md:text-sm">SERVICE TYPE</label>
                  <select
                             className="w-full appearance-none border-b border-[#d0c5af] bg-transparent py-3 md:py-4 text-sm md:text-base text-[#1d1b17] outline-none placeholder:text-[#9a8f7e] focus:border-[#a07c4c] transition"
                    id="servicetype"
                  >
                    <option value="Editorial Makeup">Editorial Makeup</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Fashion Makeup">Fashion Makeup</option>
                  </select>
                </div>

                         <div className="grid gap-3 md:gap-4">
                           <label htmlFor="date" className=" font-normal tracking-[.8px] text-(--brand-color) uppercase text-xs md:text-sm">PREFERRED DATE</label>
                  <input
                             className="w-full border-b border-[#d0c5af] bg-transparent py-3 md:py-4 text-sm md:text-base text-[#1d1b17] outline-none placeholder:text-[#9a8f7e] focus:border-[#a07c4c] transition"
                    type="date"
                    id="date"
                  />
                </div>

                         <div className="grid gap-3 md:gap-4">
                           <label htmlFor="message" className=" font-normal tracking-[.8px] text-(--brand-color) uppercase text-xs md:text-sm">HOW CAN WE HELP?</label>
                  <textarea
                             className="w-full border-b border-[#d0c5af] bg-transparent py-3 md:py-4 text-sm md:text-base text-[#1d1b17] outline-none placeholder:text-[#9a8f7e] focus:border-[#a07c4c] transition resize-none min-h-32 md:min-h-44"
                    placeholder="Describe your vision or the event..."
                    id="message"
                    rows={4}
                  ></textarea>
                </div>

                <button
                  type="submit"
                           className="mt-2 md:mt-3 inline-flex w-fit items-center justify-center rounded bg-linear-to-t from-[#ccae86] to-[#725a39] px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-semibold uppercase tracking-[.8px] text-white shadow-[0_20px_40px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 "
                >
                  SUBMIT INQUIRY
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>


  );
}


export const metadata = {
  title: 'Contact - The Atelier',
};