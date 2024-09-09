import React from "react";
import HeaderSheetMenu from "./header-sheet-menu";
import IconPersonalLogo from "@/components/icons/icon-personal-logo";
import { Button } from "@/components/ui/button";
import IconDownload from "@/components/icons/icon-download";
import Link from "next/link";
import { HeaderItems } from "./header-items";

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
            <Link href={item.link} key={item.title}>
              {item.title}
            </Link>
          ))}
        </div>
        <Button endIcon={<IconDownload />} className="hidden md:flex">
          Resume
        </Button>
        <HeaderSheetMenu />
      </div>
    </header>
  );
};

export default Header;
