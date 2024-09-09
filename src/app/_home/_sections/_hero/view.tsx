import Image from "next/image";
import React from "react";

const HeroView = () => {
  return (
    <div className="flex w-full flex-col items-center bg-gray-300 md:flex-row-reverse">
      <Image
        src="/images/hero-section.png"
        alt="hero image"
        width={343}
        height={332}
        className="block bg-green-300 md:hidden"
      />
      <Image
        src="/images/hero-section-desktop.png"
        alt="hero image"
        width={889}
        height={596}
        className="hidden bg-green-300 md:block"
      />
      <div className="mt-12 flex flex-col gap-8 bg-sky-300 md:mt-0">
        <div className="bg-yellow-200">
          <span className="text-DisplayText(M)-Regular">Hello I am</span>
          <span className="text-DisplayText(M)-ExtraBold ml-2">
            Matin Khani.
          </span>
          <br />
          <span className="text-DisplayText(M)-ExtraBold">Frontend</span>
          <span className="text-DisplayText(M)-Regular ml-2">Developer</span>
          <br />
          <span className="text-DisplayText(M)-Regular">Based In</span>
          <span className="text-DisplayText(M)-ExtraBold ml-2">
            Iran, Tehran.
          </span>
        </div>
        <p className="text-Paragraph-P2-Regular bg-orange-300 text-Zinc-500">
          I'm 20 years old, a web developer specializing in front-end
          development. I became interested in programming and choose it as my
          life path. Always energetic and eager to learn new skills and solve
          challenges via self-study and search methodes. I believe success comes
          from the ability to continously learn, adapt, and master new
          technologies, not just from knowing everything.
        </p>
        <div className="h-14 w-full bg-indigo-400"></div>
      </div>
    </div>
  );
};

export default HeroView;
