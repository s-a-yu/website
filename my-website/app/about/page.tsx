import Image from "next/image";
import { Beau_Rivage, Be_Vietnam_Pro } from "next/font/google";

const beauRivage = Beau_Rivage({ subsets: ["latin"], weight: "400" });
const beVietnam = Be_Vietnam_Pro({ subsets: ["latin"], weight: "400" });

export default function About() {
    return (
      <div className="flex flex-row items-center justify-between min-h-screen text-[#FCF6EC] bg-[#101010] p-20">
        {/* Left Content */}
        <div className="w-1/2">
          <h1 className={`${beauRivage.className} text-8xl italic mb-6`}>about me</h1>
          <p className={`${beVietnam.className} text-lg max-w-xl leading-relaxed`}>
            Hi, I’m Stephanie Allison Yu, a [your profession/expertise] passionate about 
            [key skills, e.g., software development, UI/UX design, AI]. I love creating 
            [mention what you build, e.g., seamless digital experiences, innovative products] 
            that blend technology and creativity.
            <br /><br />
            With experience in [mention key areas], I thrive on solving challenges and bringing ideas to life. 
            Outside of work, I enjoy [hobbies] and always seek inspiration in the world around me.
            <br /><br />
            Let’s connect and create something amazing!
          </p>
        </div>
        
        {/* Right Image */}
        <div className="w-1/2 flex justify-end">
          <Image 
            src="public/profile.png" 
            alt="me" 
            width={400} 
            height={500} 
            className="rounded-lg"
          />
        </div>
      </div>
    );
}
