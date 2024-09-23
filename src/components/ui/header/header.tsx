import React from "react";
import IconPersonalLogo from "@/components/icons/icon-personal-logo";
import Link from "next/link";
import { HeaderItems } from "./header-items";
import HeaderDownloadBtn from "./header-download-btn";

const Header = () => {
  return (
    <header className="w-full p-4 md:px-20 md:py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <IconPersonalLogo />
          <h1>Matin Khani</h1>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {HeaderItems.map((item) => (
            <Link
              href={`#${item.link}`}
              key={item.title}
              className="cursor-hover"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <HeaderDownloadBtn />
        {/* <HeaderSheetMenu /> */}
      </div>
    </header>
  );
};

export default Header;
