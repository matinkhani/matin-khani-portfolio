import React, { FC, ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
};

const CardSkills: FC<Props> = ({ title, icon }) => {
  return (
    <div className="group flex h-28 w-28 cursor-custom flex-col items-center justify-center gap-9 rounded border-2 border-Primary-Black bg-Primary-White p-6 hover:bg-Primary-Black md:h-36 md:w-36">
      {icon}
      <p className="text-Primary-Black group-hover:text-Primary-White">
        {title}
      </p>
    </div>
  );
};

export default CardSkills;
