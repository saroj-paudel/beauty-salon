import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const imgs = [
  {src:"https://bty-salon.netlify.app/_next/static/media/galleryPic1.16g6zapwbe_nn.png", colspan:"col-span-8"},
  {src:"https://bty-salon.netlify.app/_next/static/media/galleryPic2.0frlpsch-od39.png", colspan:"col-span-4"},
  {src:"https://bty-salon.netlify.app/_next/static/media/galleryPic3.3-cg2flan0a1v.png", colspan:"col-span-4"},
  {src:"https://bty-salon.netlify.app/_next/static/media/galleryPic4.3e5au1-ce68_1.png", colspan:"col-span-8"},
  {src:"https://bty-salon.netlify.app/_next/static/media/galleryPic5.0vtys_r-290t6.png", colspan:"col-span-4"},
  {src:"https://bty-salon.netlify.app/_next/static/media/galleryPic6.0ttiwmiu-vdjp.png", colspan:"col-span-4"},
  {src:"https://bty-salon.netlify.app/_next/static/media/galleryPic7.3mjq8ghf2-3cp.png", colspan:"col-span-4"},
 
];

export default function page() {
  return (
    <main className="mt-16">
      <section className="p-8">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1 mb-8">
            <span className="tracking-[3.2px] text-(--brand-color)">THE GALLERY</span>
            <h1 className="tracking-[-1.8px] text-7xl/[100px] ">
              Curated Artistry, <br />
              <span className="italic">Modern Elegance.</span>
            </h1>
          </div>
          <p className="text-[#4d4635] text-lg w-1/4">
            A visual narrative of transformation. Each look is a dialogue
            between technique and the canvas of the self.
          </p>
        </div>

        <menu className="flex items-center justify-start my-4 pb-8 border-b border-b-[#d0c5af1a] gap-4">
          <Link href={"/404"} className="px-6 py-2 rounded-[12px] text-sm bg-(--brand-color) text-white font-medium">
            All Works
          </Link>
          <Link href={"/404"} className="text-[#656464] bg-[#e4e2e1] px-6 py-2 rounded-[12px] text-sm font-medium">Natural</Link>
          <Link href={"/404"} className="text-[#656464] bg-[#e4e2e1] px-6 py-2 rounded-[12px] text-sm font-medium">Editorial Bold</Link>
          <Link href={"/404"} className="text-[#656464] bg-[#e4e2e1] px-6 py-2 rounded-[12px] text-sm font-medium">Traditional Heritage</Link>
          <Link href={"/404"} className="text-[#656464] bg-[#e4e2e1] px-6 py-2 rounded-[12px] text-sm font-medium">Modern Minimal</Link>
        </menu>

        <div className="grid grid-cols-12 w-full gap-8">
          {imgs.map((img) => {
            return (
              <div className={img.colspan + " max-h-[500px] overflow-hidden rounded"} key={img.src}>
                <img src={img.src} className="h-full w-full object-cover"></img>
              </div>
            );
          })}
        </div>
      </section>



 <section className="p-8 my-12 flex justify-between">
      <div className="bg-[#f5f3ef] rounded p-24 flex flex-col gap-4 items-start justify-center">
        <h2 className="text-4xl">The Signature <br />
Consultation</h2>
<p className="text-[#4d4635] max-w-[390px]">Beyond the palette, we define a look that resonates
with your personal narrative. Every session begins
with a dialogue of style and intention.</p>
<button className="text-(--brand-color) text-xs tracking-[1.2px] align-middle">VIEW PROCESS <FaArrowRight className="ml-2 inline "/></button>
      </div>
      <div className="relative after:h-full after:w-full after:border after:border-gray-500 after:absolute after:top-0 after:scale-[0.9]">
        <img src='https://bty-salon.netlify.app/_next/static/media/signatureconsult.0jp_6nx2cgr_1.png' className="grayscale h-full w-full object-cover"></img>
      </div>
    </section>

    </main>
  );
}

export const metadata = {
  title: 'Portfolio - The Atelier',
};