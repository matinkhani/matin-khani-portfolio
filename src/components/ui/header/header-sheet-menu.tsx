"use client";
import React, { useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconBurgurMenu from "@/components/icons/icon-burgur-menu";
import { HeaderItems } from "./header-items";
import HeaderDownloadBtn from "./header-download-btn";

const HeaderSheetMenu = () => {
  const sheetRef = useRef<HTMLDivElement | null>(null);

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (sheetRef.current) {
      sheetRef.current.click(); // This will trigger the close button of the Sheet
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <IconBurgurMenu />
      </SheetTrigger>
      <SheetContent ref={sheetRef}>
        <SheetDescription className="mt-11 flex flex-col items-center gap-6">
          <HeaderDownloadBtn />
          {HeaderItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleLinkClick(item.link)}
              className="text-Heading-H5-Bold"
            >
              {item.title}
            </button>
          ))}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderSheetMenu;
