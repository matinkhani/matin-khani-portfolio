import React from "react";

const SkillsSection = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/skills`,
  //   {
  //     method: "GET",
  //   },
  // );
  // const skills = await res.json();
  // console.log(skills);

  return (
    <div>
      {/* {skills.res.map((skill: { id: string; title: string; icon: string }) => (
        <div key={skill.id}>
          <h1>{skill.title}</h1>
          <div
            className="text-black hover:text-red-400"
            dangerouslySetInnerHTML={{ __html: skill.icon }}
          />
        </div>
      ))} */}
    </div>
  );
};

export default SkillsSection;
