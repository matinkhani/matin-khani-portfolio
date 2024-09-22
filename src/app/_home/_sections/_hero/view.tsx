import IconGithub from "@/components/icons/icon-github";
import IconLinkedin from "@/components/icons/icon-linkedin";
import IconMedium from "@/components/icons/icon-medium";
import IconTelegram from "@/components/icons/icon-telegram";
import CardSocials from "@/components/ui/card-socials";
import Image from "next/image";
import React from "react";

// TODO: edit items array
const SocialItems = [
  { id: 1, icon: <IconGithub />, link: "https://github.com/matinkhani" },
  { id: 2, icon: <IconLinkedin />, link: "https://linkedin.com/in/matinkhani" },
  { id: 3, icon: <IconMedium />, link: "https://medium.com/@matinkhani" },
  { id: 4, icon: <IconTelegram />, link: "https://t.me/khanimat" },
];

const HeroView = () => {
  return (
    // TODO: add text color to texts
    <div className="flex w-full flex-col items-center md:flex-row-reverse">
      <Image
        src="/images/hero-section-2.jpg"
        alt="hero image"
        width={350}
        height={280}
        className="block md:hidden"
      />
      <Image
        src="/images/hero-section-2.jpg"
        alt="hero image"
        width={500}
        height={496}
        className="hidden md:block"
      />
      <div className="mt-12 flex flex-col gap-8 md:mt-0">
        <div>
          <span className="text-DisplayText(M)-Regular md:text-DisplayText-Regular">
            Hello I am
          </span>
          <span className="ml-2 text-DisplayText(M)-ExtraBold md:text-DisplayText-ExtraBold">
            Matin Khani.
          </span>
          <br />
          <span className="text-DisplayText(M)-ExtraBold md:text-DisplayText-ExtraBold">
            Frontend
          </span>
          <span className="ml-2 text-DisplayText(M)-Regular md:text-DisplayText-Regular">
            Developer
          </span>
          <br />
          <span className="text-DisplayText(M)-Regular md:text-DisplayText-Regular">
            Based In
          </span>
          <span className="ml-2 text-DisplayText(M)-ExtraBold md:text-DisplayText-ExtraBold">
            Iran, Tehran.
          </span>
        </div>
        <p className="text-Paragraph-P2-Regular text-Zinc-500 md:text-Paragraph-P1-Regular">
          I am 20 years old, a web developer specializing in front-end
          development. I became interested in programming and choose it as my
          life path. Always energetic and eager to learn new skills and solve
          challenges via self-study and search methodes. I believe success comes
          from the ability to continously learn, adapt, and master new
          technologies, not just from knowing everything.
        </p>
        <div className="flex h-14 w-full items-center gap-6 md:gap-8">
          {SocialItems.map((item) => (
            <CardSocials
              icon={item.icon}
              link={item.link}
              iconClassName="group-hover:fill-Primary-White"
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroView;
