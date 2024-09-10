import Link from "next/link";
import React, { FC } from "react";

type Props = {
  icon: React.ReactNode;
  link: string;
  iconClassName?: string;
};

const CardSocials: FC<Props> = ({ icon, link, iconClassName }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="group flex h-12 w-12 items-center justify-center rounded border-2 border-Primary-Black bg-Primary-White hover:bg-Primary-Black md:h-14 md:w-14"
    >
      <span className={iconClassName}>{icon}</span>
    </Link>
  );
};

export default CardSocials;
