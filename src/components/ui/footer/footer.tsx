import React from "react";
import IconPersonalLogo from "@/components/icons/icon-personal-logo";

const Footer = () => {
  return (
    <footer className="w-screen bg-Primary-Black">
      {/* <div className="absolute inset-0 bg-black" /> */}
      <div className="relative z-10 mx-auto flex max-w-1440 items-center justify-between px-4 py-5 md:px-20 md:py-6">
        <div className="flex items-center gap-3">
          <IconPersonalLogo className="text-Primary-White" />
          <p className="text-Heading-H5-Bold text-Primary-White">Matin Khani</p>
        </div>
        <div className="flex items-center text-Heading-H6-SemiBold text-Primary-White">
          @2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
