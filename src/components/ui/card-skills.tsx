import React, { FC, ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
  className?: string;
};

const CardSkills: FC<Props> = ({ title, icon, className }) => {
  return (
    <div
      className={`${className} cursor-custom group z-10 flex h-28 flex-grow flex-col items-center justify-center rounded border-2 border-Primary-Black bg-Primary-White p-6 md:h-36`}
    >
      {icon}
      <p className="text-Primary-Black">{title}</p>
    </div>
  );
};

export default CardSkills;
