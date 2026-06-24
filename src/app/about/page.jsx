import { FaRegCheckCircle } from "react-icons/fa";


const ethosList = [
    {
        title: '01. Intentionality',
        text:"We reject the 'mask' approach. Every brushstroke is calculated to enhance your natural architecture rather than concealing it."
    },
    {
        title: '02. Tonal Depth',
        text:"Inspired by oil paintings, we layer texturesmattes against glows—to create a multidimensional look that thrives under any light."
    },
    {
        title: '03. Cultural Respect',
        text:"Specializing in Asian features within a Western context, we understand the nuances of monolid artistry and porcelain complexions."
    },

]


export default function page() {
  return (
    <main className="mt-16">
      

    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 p-8 mb-10">
      <div className="w-full lg:w-1/2 max-w-2xl">
        <h1 className="text-[56px] sm:text-5xl font-normal leading-tight tracking-tight">A Bridge Between <br /> <span className="text-(--brand-color)">London &amp; Kyoto.</span></h1>
        <p className="mt-8 text-base sm:text-lg leading-8 text-[#4D4635]">Founded in 2018, The Atelier was born from a desire to harmonize the
structured elegance of English bridal aesthetics with the ethereal, skin-
focused techniques of East Asian beauty.</p>
        <p className="mt-5 text-base sm:text-lg leading-8 text-[#4D4635]">What started as a private studio in a sun-drenched loft has evolved into a
sanctuary for those seeking "The Curated Look"—a style that honors heritage
while embracing modern luxury.</p>
      </div>
      <div className="relative  w-full lg:w-[45%] ">
        <img className="w-full h-full  shadow-2xl object-cover" src="https://bty-salon.netlify.app/_next/static/media/abouthero.3uplr8w94dvu_.png" />
        <div className="absolute left-[10%] bottom-0 -translate-x-1/2 translate-y-1/2 max-w-1/3 sm:w-[75%] bg-white/95 border border-slate-200 px-6 py-6  shadow-2xl">
          <p className="text-base sm:text-lg leading-7 text-(--brand-color) italic font-noto-serif ">"True beauty is the
space between the
notes."</p>
        </div>
      </div>
    </section>



    <section className="bg-[#F5F3EF] py-32">
      <div className="mx-auto  px-6">
        <span className="block text-center text-xs font-medium uppercase tracking-[0.25em] text-[#8B7861]">OUR ETHOS</span>
        <h2 className="mt-4 text-center text-5xl font-normal tracking-tight  sm:text-5xl">The Fusion Philosophy</h2>
        <div className="mt-16 flex justify-between">
          {ethosList.map((ethoItem) => {
            return (
              <div className="space-y-4 w-1/4" key={ethoItem.title}>
                <h3 className="text-xl font-normal text-(--brand-color)">{ethoItem.title}</h3>
                <p className="text-base leading-7 text-[#4D4635]">{ethoItem.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>


    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B7861]">THE HANDS</span>
          <h1 className="mt-4 text-4xl font-normal tracking-tight text-[#111827]">Meet the Curators</h1>
        </div>
        <p className=" text-sm leading-normal leading-7 text-[#4D4635] pr-5 max-w-[320px]">Every artist at The Atelier has undergone a minimum of two years of internal training in our signature fusion method.</p>
      </div>

      <div className="grid gap-16 lg:grid-cols-2 mt-12">
        <div className="space-y-6 flex flex-col items-start h-[650px]">
          <img className="w-full h-[375px] object-cover grayscale hover:grayscale-0" src="https://bty-salon.netlify.app/_next/static/media/artist1.2p01qw3m22tg2.png" alt="Eleanor Thorne" />
          <div className="flex items-end justify-between w-full">
            <h3 className="text-2xl font-normal tracking-tight text-[#111827]">Eleanor Thorne</h3>
            <span className="text-[10.4px] uppercase tracking-[0.2em] text-[#8B7861]">FOUNDER / SENIOR ARTIST</span>
          </div>
          <p className="text-sm leading-7 text-[#4D4635]">With a background in Fine Arts from London and editorial experience in Vogue, Eleanor brings a sculptural approach to bridal makeup.</p>
          <button className="text-xs font-normal uppercase tracking-[1.12px] text-(--brand-color) border-b border-b[#725A3933] pb-1">VIEW PORTFOLIO</button>
        </div>
        <div className="space-y-6 flex flex-col items-start justify-end h-[650px]">
          <img className="w-full h-[375px] object-cover grayscale hover:grayscale-0" src="https://bty-salon.netlify.app/_next/static/media/artist2.3af_3yo3nt4ib.png" alt="Mei Akasaka" />
          <div className="flex items-end justify-between w-full">
            <h3 className="text-2xl font-normal tracking-tight text-[#111827]">Mei Akasaka</h3>
            <span className="text-[10.4px] uppercase tracking-[0.2em] text-[#8B7861]">MASTER ARTIST</span>
          </div>
          <p className="text-sm leading-7 text-[#4D4635]">Mei’s expertise lies in 'Mochi-Hada' (rice-cake skin) techniques, perfecting the art of the translucent, long-lasting base.</p>
          <button className="text-xs font-normal uppercase tracking-[1.12px] text-(--brand-color) border-b border-b[#725A3933] pb-1">VIEW PORTFOLIO</button>
        </div>
      </div>
    </section>



    <section className="bg-white flex items-center justify-between mx-8 rounded shadow-sm px-16 py-26">
     <div className="flex flex-col gap-6 max-w-[496px]">
        <span className="text-(--brand-color) text-xs tracking-[2.4px]">OUR STANDARDS</span>
        <h2 className="text-3xl">The Curated Kit</h2>
        <p className="text-[#4D4635]">We don't believe in brand loyalty; we believe in performance. Our kit
is a hand-picked selection of Japanese skincare, English luxury
foundations, and professional lighting equipment to ensure your
look translates perfectly from person to screen.</p>
<ul className="flex flex-wrap">
    <li className="w-1/2 flex items-center gap-4 text-[#1B1C1A] text-xs tracking-[.6px]"><FaRegCheckCircle className="text-(--brand-color)"/>
 HYPOALLERGENIC</li>
    <li className="w-1/2 flex items-center gap-4 text-[#1B1C1A] text-xs tracking-[.6px]"><FaRegCheckCircle className="text-(--brand-color)"/>
 HD READY</li>
    <li className="w-1/2 flex items-center gap-4 text-[#1B1C1A] text-xs tracking-[.6px]"><FaRegCheckCircle className="text-(--brand-color)"/>
 18-HOUR WEAR</li>
    <li className="w-1/2 flex items-center gap-4 text-[#1B1C1A] text-xs tracking-[.6px]"><FaRegCheckCircle className="text-(--brand-color)"/>
 CRUELTY FREE</li>
</ul>
        </div> 
        <div className="flex overflow-hidden h-68  gap-4">
    <img src="https://bty-salon.netlify.app/_next/static/media/standard1.1ft0ml59px9a1.png" height="240px" width="240px" className="h-60 w-60 self-center rounded"></img>
    <img src="https://bty-salon.netlify.app/_next/static/media/standard2.3yaglpakmjz6x.png" height="240px" width="240px" className="h-60 w-60 self-end rounded"></img>
            
        </div>
    </section>



    </main>
  )
}

export const metadata = {
  title: 'About - The Atelier',
};