import Image from "next/image";
import React from "react";

const AboutMeView = () => {
  return (
    <div
      id="about-me"
      className="mt-10 flex flex-col items-center gap-5 bg-Primary-White pb-10 md:flex-row md:gap-20"
    >
      <Image
        src="/images/about-me.png"
        alt="about me"
        height={374}
        width={343}
      />
      <div className="flex flex-col justify-center gap-5 text-Paragraph-P2-Regular text-Zinc-500">
        <div>
          <span className="text-DisplayText(M)-Regular text-Primary-Black md:text-DisplayText-Regular">
            About
          </span>
          <span className="ml-2 text-DisplayText(M)-ExtraBold text-Primary-Black md:text-DisplayText-ExtraBold">
            Me
          </span>
        </div>
        <p>
          Hello! I’m Matin, a 20-year-old frontend developer with a passion for
          creating engaging and dynamic web experiences. My journey into
          programming began with a fascination for how technology shapes our
          world, and I chose to pursue it as my career path. Specializing in
          frontend development, I thrive on transforming complex ideas into
          intuitive, user-friendly websites. I find joy in every project,
          watching my skills evolve and my creations come to life on the screen.
        </p>
        <p>
          My enthusiasm for learning drives me to constantly explore new
          technologies and tackle fresh challenges. I believe that true success
          in this field comes from a commitment to continuous learning and
          adaptation. I approach each project with an open mind and a
          determination to master new tools and techniques. This mindset not
          only keeps me on the cutting edge of technology but also fuels my
          creativity and problem-solving abilities.
        </p>
        <p>
          Outside of my work, I am always on the lookout for opportunities to
          expand my knowledge and grow as a developer. Whether it is
          experimenting with new frameworks, delving into advanced coding
          practices, or collaborating with others in the tech community, I am
          dedicated to pushing the boundaries of what I can achieve. My goal is
          to craft exceptional web experiences that not only meet but exceed
          expectations, all while staying curious and motivated.
        </p>
      </div>
    </div>
  );
};

export default AboutMeView;
