
import { MdOutlineBrush } from "react-icons/md";
import { PiMagicWandFill } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";


export default function page() {
  return (
    <main className="mt-16 bg-[#fbf9f5]">

      <section className="space-y-10 pt-12 max-w-4xl mx-auto">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-8">
          <div className="flex flex-col items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--brand-color) text-sm font-semibold text-white">
              1
            </span>
            <span className="text-[10.4px] font-bold uppercase tracking-[0.24em] text-(--brand-color)">
              Service
            </span>
          </div>
          <div className="flex flex-col items-center gap-3  opacity-40">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D0C5AF] bg-white text-sm font-semibold text-[#1B1C1A]">
              2
            </span>
            <span className="text-[10.4px] font-normal uppercase tracking-[1.04px] text-[#1B1C1A]">
              Schedule
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 opacity-40">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D0C5AF] bg-white text-sm font-semibold text-[#1B1C1A]">
              3
            </span>
            <span className="text-[10.4px] font-normal uppercase tracking-[1.04px] text-[#1B1C1A]">
              Details
            </span>
          </div>
        </div>

        <div className="">
          <h1 className="text-6xl font-serif tracking-tight text-(--brand-color)">
            Curated Artistry
          </h1>
          <p className=" max-w-lg text-base leading-7 text-[#4D4635]">
            Select a tailored experience designed to enhance your natural
            features with our signature minimal aesthetic.
          </p>
        </div>



        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200/80 bg-white p-8 shadow-sm h-fit">
            <div className="flex items-start justify-between gap-4">
              <div className="text-2xl text-(--brand-color)">
                <MdOutlineBrush />
              </div>
              <span className="italic font-noto-serif font-semibold text-(--brand-color)">£120</span>
            </div>
            <div className="mt-20 space-y-4">
              <h3 className="text-2xl font-normal text-[#1B1C1A]">
                The Editorial Glow
              </h3>
              <p className="text-sm leading-6 text-[#4D4635]">
                Our signature look. Skin-focused artistry utilizing high-end
                organic formulas for a timeless, dewy finish.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#F5F3EF] px-3 py-1 text-[10.4px] uppercase tracking-[1.04px] text-[#1B1C1A]">
                  90 mins
                </span>
                <span className="rounded-full  bg-[#CCAE8633] px-3 py-1 text-[10.4px] uppercase tracking-[1.04px] text-(--brand-color)">
                  Most popular
                </span>
              </div>
            </div>
          </div>


          <div className="overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-cover"
              src="https://bty-salon.netlify.app/_next/static/media/bookinghero.10---73z8876a.png"
              alt="Booking hero"
            />
          </div>


          <div className="rounded-lg bg-[#F5F3EF] p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="text-2xl text-[#4D4635]">
                <MdOutlineLightMode />
              </div>
              <span className="italic font-noto-serif font-semibold text-[#4D4635]">£180</span>
            </div>
            <div className="mt-20 space-y-4">
              <h3 className="text-2xl font-normal text-[#1B1C1A]">Bridal Atelier</h3>
              <p className="text-sm leading-6 text-[#4D4635]">
                A comprehensive session including consultation and long-wear
                application for your special day.
              </p>
              <span className="inline-flex rounded-full bg-white px-3 py-1 text-[10.4px] uppercase tracking-[1.04px] text-[#1B1C1A]">
                150 mins
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200/80 bg-white p-6">
            <div className="flex items-start justify-between gap-4 text-slate-700">
              <div className="text-2xl text-[#4D4635]">
                <PiMagicWandFill />
              </div>
              <span className="italic font-noto-serif font-semibold text-[#4D4635]">£85</span>
            </div>
            <div className="mt-20 space-y-4">
              <h3 className="text-2xl font-normal text-[#1B1C1A]">The Masterclass</h3>
              <p className="text-sm leading-6 text-[#4D4635]">
                One-on-one education focusing on perfecting your daily routine
                with personalized product curation.
              </p>
              <span className="inline-flex rounded-full bg-[#F5F3EF] px-3 py-1 text-[10.4px] uppercase tracking-[1.04px] text-[#1B1C1A]">
                60 mins
              </span>
            </div>
          </div>
        </div>
      </section>




 <section className="mt-16 max-w-4xl mx-auto">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[36px] font-normal tracking-tight text-(--brand-color)">
              Select Availability
            </h2>
            <span className="uppercase tracking-[1.6px] text-[#4D4635]">
              MARCH 2024
            </span>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">



            <div className="rounded-lg bg-[#F5F3EF80] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-7 gap-4 text-[9.6px] uppercase  text-[#1B1C1A] opacity-50">
                <span className="text-center">MON</span>
                <span className="text-center">TUE</span>
                <span className="text-center">WED</span>
                <span className="text-center">THU</span>
                <span className="text-center">FRI</span>
                <span className="text-center">SAT</span>
                <span className="text-center">SUN</span>
              </div>
              <div className="mt-6 grid grid-cols-7 gap-4 text-sm leading-10 text-center text-[#1B1C1A] font-medium">
                <span className="opacity-20">26</span>
                <span className="opacity-20">27</span>
                <span className="opacity-20">28</span>
                <span className="opacity-20">29</span>
                <span className="">1</span>
                <span className="">2</span>
                <span className="">3</span>
                <span className="">4</span>
                <span className="">5</span>
                <span className="flex h-14 items-center justify-center rounded-sm bg-[#7A5A2E] text-white shadow-[0_18px_30px_rgba(122,90,46,0.18)]">
                  6
                </span>
                <span className="">7</span>
                <span className="">8</span>
                <span className="">9</span>
                <span className="">10</span>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-sm uppercase font-bold tracking-[1.12PX] text-(--brand-color)">
                Available times
              </span>
              <div className="grid gap-3 grid-cols-2 mt-6">

<div>
  <input type="radio" name="time" id="0930" value="09:30 AM" className="h-4 w-4 accent-amber-900  peer hidden" />
  <div className=" rounded-sm border border-[#D0C5AF4D]  peer-checked:bg-[#CCAE86] text-[#1B1C1A] peer-checked:text-[#574122] peer-checked:font-bold px-4 py-4">
    <div className="flex items-center justify-between text-sm  ">
      <label htmlFor="0930" className="cursor-pointer ">
        09:30 AM
      </label>
    </div>
  </div>
</div>

<div>
  <input type="radio" name="time" id="1030" value="10:30 AM" className="h-4 w-4 accent-amber-900  peer hidden" />
  <div className=" rounded-sm border border-[#D0C5AF4D]  peer-checked:bg-[#CCAE86] text-[#1B1C1A] peer-checked:text-[#574122] peer-checked:font-bold px-4 py-4">
    <div className="flex items-center justify-between text-sm  ">
      <label htmlFor="1030" className="cursor-pointer ">
        10:30 AM
      </label>
    </div>
  </div>
</div>

<div>
  <input type="radio" name="time" id="1200" value="12:00 PM" className="h-4 w-4 accent-amber-900  peer hidden" defaultChecked={true} />
  <div className=" rounded-sm border border-[#D0C5AF4D]  peer-checked:bg-[#CCAE86] text-[#1B1C1A] peer-checked:text-[#574122] peer-checked:font-bold px-4 py-4">
    <div className="flex items-center justify-between text-sm  ">
      <label htmlFor="1200" className="cursor-pointer ">
        12:00 PM
      </label>
    </div>
  </div>
</div>

<div>
  <input type="radio" name="time" id="0230" value="02:30 PM" className="h-4 w-4 accent-amber-900  peer hidden" />
  <div className=" rounded-sm border border-[#D0C5AF4D]  peer-checked:bg-[#CCAE86] text-[#1B1C1A] peer-checked:text-[#574122] peer-checked:font-bold px-4 py-4">
    <div className="flex items-center justify-between text-sm  ">
      <label htmlFor="0230" className="cursor-pointer ">
        02:30 PM
      </label>
    </div>
  </div>
</div>

<div>
  <input type="radio" name="time" id="0400" value="04:00 PM" className="h-4 w-4 accent-amber-900  peer hidden" />
  <div className=" rounded-sm border border-[#D0C5AF4D]  peer-checked:bg-[#CCAE86] text-[#1B1C1A] peer-checked:text-[#574122] peer-checked:font-bold px-4 py-4">
    <div className="flex items-center justify-between text-sm  ">
      <label htmlFor="0400" className="cursor-pointer ">
        04:00 PM
      </label>
    </div>
  </div>
</div>

<div>
  <input type="radio" name="time" id="0530" value="05:30 PM" className="h-4 w-4 accent-amber-900  peer hidden" />
  <div className=" rounded-sm border border-[#D0C5AF4D]  peer-checked:bg-[#CCAE86] text-[#1B1C1A] peer-checked:text-[#574122] peer-checked:font-bold px-4 py-4">
    <div className="flex items-center justify-between text-sm  ">
      <label htmlFor="0530" className="cursor-pointer ">
        05:30 PM
      </label>
    </div>
  </div>
</div>

              </div>
              <p className="text-xs leading-6 text-[#4D4635]">
                All appointments are subject to a 24-hour cancellation policy. A deposit may be required.
              </p>
            </div>
          </div>
        </section>





  <section className="max-w-4xl mx-auto mt-12 ">
      <h2 className="text-[36px] font-normal tracking-tight text-(--brand-color) mb-8">Your Details</h2>
      <form action="" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
            <label htmlFor="fullname" className="block text-[10.4px] font-medium uppercase tracking-[1.04px] text-(--brand-color) mb-2">FULL NAME</label>
            <input type="text" id="fullname" placeholder="Rajesh Hamal" className="w-full border border-[#D0C5AF] bg-transparent px-4 py-3 text-slate-700 placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-amber-100" />
        </div>
        <div>
            <label htmlFor="email" className="block text-[10.4px] font-medium uppercase tracking-[1.04px] text-(--brand-color) mb-2">EMAIL ADDRESS</label>
            <input type="email" id="email" placeholder="hamal@rajesh.dai" className="w-full border border-[#D0C5AF] bg-transparent px-4 py-3 text-slate-700 placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-amber-100" />
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="note" className="block text-[10.4px] font-medium uppercase tracking-[1.04px] text-(--brand-color) mb-2">NOTES OR SKIN CONCERNS</label>
            <textarea id="note" placeholder="Please mention any allergies or specific preferences..." className="w-full border border-[#D0C5AF] bg-transparent px-4 py-3 text-slate-700 placeholder:text-[#6B7280] h-28 resize-none focus:outline-none focus:ring-2 focus:ring-amber-100" />
        </div>
      </form>

      <div className="mt-10 bg-[#EAE8E4] py-16 text-center rounded-lg ">
        <div className="text-xs uppercase tracking-[1.2px] text-(--brand-color) mb-4">Summary</div>
        <h3 className="text-3xl font-serif text-[#1B1C1A] mb-4">The Editorial Glow</h3>
        <div className=" text-[#4D4635] mb-6">Wednesday, March 6th at 12:00 PM</div>
        <button className="inline-block text-lg bg-(--brand-color) text-white py-5 px-12 shadow-md hover:shadow-lg rounded-lg font-noto-serif" >Confirm Appointment</button>
      </div>

    </section>



    </main>
  );
}


export const metadata = {
  title: 'Booking - The Atelier',
};