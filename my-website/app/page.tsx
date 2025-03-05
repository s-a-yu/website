import Link from "next/link";
import { Beau_Rivage, Be_Vietnam_Pro } from "next/font/google";

const beauRivage = Beau_Rivage({ subsets: ["latin"], weight: "400" });
const beVietnam = Be_Vietnam_Pro({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#101010" }}
      className="flex flex-col items-center justify-between min-h-screen p-8 sm:p-20"
    >
      {/* name */}
      <div 
        className={`${beauRivage.className} text-[#FCF6EC] text-15xl sm:text-[10rem] leading-tight text-center w-screen fixed top-0 left-0 bg-[#101010]`}
      >
        <p>Stephanie<span className="ml-2">Allison</span><span className="ml-2">Yu</span></p>
      </div>

      {/* menu */}
      <div className="flex justify-between w-full text-[#FCF6EC] text-2xl font-bold absolute bottom-10 px-20">
        <div className={`${beVietnam.className} flex flex-col gap-2 text-left`}>
          <Link href="app/about/page">01 about me</Link>
          <Link href="/technical">02 technical projects</Link>
        </div>
        <div className={`${beVietnam.className} flex flex-col gap-2 text-left`}>
          <Link href="/product">03 product projects</Link>
          <Link href="/design">04 design projects</Link>
        </div>
      </div>
    </div>
  );
}
