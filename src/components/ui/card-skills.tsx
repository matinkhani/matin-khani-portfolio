import React, { FC, ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
};

const CardSkills: FC<Props> = ({ title, icon }) => {
  return (
    <div className="cursor-custom group flex h-28 flex-grow flex-col items-center justify-center rounded border-2 border-Primary-Black bg-Primary-White p-6 hover:bg-Primary-Black md:h-36">
      {icon}
      <p className="text-Primary-Black group-hover:text-Primary-White">
        {title}
      </p>
    </div>
  );
};

export default CardSkills;
