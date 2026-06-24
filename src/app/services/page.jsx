const serviceList = [
  {
    title: "Bridal Makeup",
    about:
      "A bespoke luminous finish designed for longevity and a timeless aesthetic. Includes full consultation and skin prep.",
    price: 450,
    img: {
      src: "https://bty-salon.netlify.app/_next/static/media/service1.2enzknpwtxont.png",
      height: 512,
      width: 512,
    },
  },
  {
    title: "Editorial Shoots",
    about:
      "Conceptual and high-fashion applications for photography, commercial work, and artistic productions.",
    price: 600,
    img: {
      src: "https://bty-salon.netlify.app/_next/static/media/service2.0rd6urgx22duq.png",
      height: 512,
      width: 512,
    },
  },
  {
    title: "Red Carpet",
    about:
      "High-impact, camera-ready glamor for gala events and public appearances. Focus on HD-compliant finishes.",
    price: 350,
    img: {
      src: "https://bty-salon.netlify.app/_next/static/media/service3.2bj604uf33mam.png",
      height: 512,
      width: 512,
    },
  },
  {
    title: "Personal Consultations",
    about:
      "One-on-one sessions focused on technique refinement, kit curation, and daily routine optimization.",
    price: 250,
    img: {
      src: "https://bty-salon.netlify.app/_next/static/media/service4.0q4mi7obppxe6.png",
      height: 512,
      width: 512,
    },
  },
];

const menuList = [
  {
    title: "Essential Glamour",
    about: "90 Minute Session",
    price: 180,
  },
  {
    title: "Eyes Only Refinement",
    about: "45 Minute Session",
    price: 95,
  },
  {
    title: "Luxury Bridal Trial",
    about: "2.5 Hour Consultation",
    price: 250,
  },
  {
    title: "Skin Prep & Glow",
    about: "Add-on Service",
    price: 45,
  },
  {
    title: "Group Workshop",
    about: "Per Person / Min 4",
    price: 120,
  },
  {
    title: "Travel & On-Site Fee",
    about: "Within 30 Miles",
    price: 50,
  },
];

export default function page() {
  return (
    <main className="mt-16 ">
      <section className="flex flex-col justify-between gap-10 p-8 lg:flex-row lg:items-end lg:gap-12 mb-8">
        <div className="flex-1 flex flex-col gap-[22.8px]">
          <span className="text-sm uppercase tracking-[3.2px] text-slate-500">
            OUR EXPERTISE
          </span>
          <h1 className="max-w-3xl text-[56px] font-semibold leading-tight text-[#1b1c1a]">
            The Art of <br /> Subtle Enhancement
          </h1>
          <p className="max-w-md text-base leading-7 text-[#4D4635]">
            An editorial approach to beauty. We specialize in sophisticated,
            long-wearing applications that honor your natural features while
            embracing elevated modern aesthetics.
          </p>
        </div>
        <div className="relative w-full max-w-xl flex-1">
          <img
            className="h-full w-full object-cover"
            src="https://bty-salon.netlify.app/_next/static/media/serviceshero.1xnk1b9jv2a1t.png"
            alt="Makeup brushes"
          />
          <div className="absolute -bottom-4 -left-4 bg-white px-6 py-4 text-xl font-normal italic text-(--brand-color) font-noto-serif rounded-md">
            Curated Experience
          </div>
        </div>
      </section>




      <section className="grid gap-y-12 gap-x-20 lg:grid-cols-2 px-8">
        {serviceList.map((service,i) => {
          return (
            <div className={`flex flex-col gap-6 h-143 ${((i+1)%2==0)?"justify-end":""}`} key={service.title}>
              <img
                className="h-81 w-full object-cover"
                src={service.img.src}
                width={service.img.width}
                height={service.img.height}
                alt={service.title}
              />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#1B1C1A]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#4D4635] max-w-[384px]">{service.about}</p>
                </div>
                <div className="flex flex-col items-start gap-1 text-right sm:items-end">
                  <span className=" text-(--brand-color)">
                    Starts at
                  </span>
                  <span className="text-2xl font-semibold text-[#1B1C1A] font-noto-serif">
                    ${service.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>




      <section className="mt-6 py-20 px-8  bg-white w-full">
        <h2 className="text-4xl font-bold tracking-tight text-[#1B1C1A] mb-6 text-center">
          The Collection Menu
        </h2>
        <div className="mx-auto mb-20 h-px w-24 bg-[#C4B78D]" />
        <menu className="grid gap-12 lg:grid-cols-2">
          {menuList.map((item, i) => {
            return (
              <div className="flex flex-col gap-1 border-b border-[#E7E2D9] pb-6" key={item.title}>
                <div className="space-y-2">
                  <span className="text-[10.4px] font-semibold text-[#4D4635] block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-xl font-bold text-[#1B1C1A]">{item.title}</h4>
                </div>
                <div className="flex justify-between items-end gap-6">
                  <p className="text-sm text-[#4D4635]">{item.about}</p>
                  <span className="text-xl font-semibold text-[#1B1C1A] whitespace-nowrap font-noto-serif">
                    ${item.price}
                  </span>
                </div>
              </div>
            );
          })}
        </menu>
      </section>

      <section className="mt-12 mx-8 bg-(--brand-color) py-30 flex flex-col items-center rounded-md">
        <h2 className="text-3xl font-normal  text-white mb-6">
          Begin Your <span className="italic">Transformation</span> 
        </h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className=" bg-white px-10 py-4 text-xs font-bold uppercase tracking-[1.2px] text-(--brand-color) rounded-lg">
            BOOK A CONSULTATION
          </button>
          <button className="border border-white px-10 py-4 text-xs font-bold uppercase tracking-[1.2px] text-white rounded-lg">
            CONTACT THE STUDIO
          </button>
        </div>
      </section>
    </main>
  );
}


export const metadata = {
  title: 'Services - The Atelier',
};