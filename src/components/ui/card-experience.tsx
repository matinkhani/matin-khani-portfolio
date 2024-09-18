import React, { FC } from "react";

type Props = {
  index: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
};

const CardExperience: FC<Props> = ({
  title,
  description,
  startTime,
  endTime,
  index,
}) => {
  return (
    <div
      className={`flex w-[80%] flex-col gap-7 rounded-md border border-Zinc-500 px-6 py-8 ${index % 2 !== 0 ? "bg-Primary-Neutral" : "bg-Primary-Black"}`}
    >
      <p className="text-Heading-H5-SemiBold text-Primary-White">{title}</p>
      <p className="text-Heading-H6-SemiBold text-Zinc-300">
        {startTime} - {endTime}
      </p>
      <p className="text-Paragraph-P2-Regular text-Zinc-300">{description}</p>
    </div>
  );
};

export default CardExperience;
