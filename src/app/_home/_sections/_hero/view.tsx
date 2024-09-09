import Image from "next/image";
import React from "react";

const HeroView = () => {
  return (
    // TODO: add text color to texts
    <div className="flex w-full flex-col items-center md:flex-row-reverse">
      <Image
        src="/images/hero-section.png"
        alt="hero image"
        width={343}
        height={332}
        className="block md:hidden"
      />
      <Image
        src="/images/hero-section-desktop.png"
        alt="hero image"
        width={889}
        height={596}
        className="hidden md:block"
      />
      <div className="mt-12 flex flex-col gap-8 md:mt-0">
        <div>
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
        <p className="text-Paragraph-P2-Regular text-Zinc-500">
          I'm 20 years old, a web developer specializing in front-end
          development. I became interested in programming and choose it as my
          life path. Always energetic and eager to learn new skills and solve
          challenges via self-study and search methodes. I believe success comes
          from the ability to continously learn, adapt, and master new
          technologies, not just from knowing everything.
        </p>
        <div className="h-14 w-full bg-green-300"></div>
      </div>
    </div>
  );
};

export default HeroView;
