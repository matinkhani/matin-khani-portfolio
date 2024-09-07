import React, { FC, ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
};

const CardSkills: FC<Props> = ({ title, icon }) => {
  return (
    <div className="group flex h-40 w-40 cursor-default flex-col items-center justify-center gap-9 rounded border-2 border-Primary-Black bg-Primary-White p-6 hover:bg-Primary-Black md:h-186 md:w-186">
      {icon}
      <p className="text-Primary-Black group-hover:text-Primary-White">
        {title}
      </p>
    </div>
  );
};

export default CardSkills;
