"use client";
import React from "react";
import { Button } from "../button";
import IconDownload from "@/components/icons/icon-download";

const HeaderDownloadBtn = () => {
  const HandleDownloadResume = () => {
    const resumeUrl = "/files/Matin-Khani-Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Matin-Khani-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={HandleDownloadResume}
      endIcon={<IconDownload />}
      className="hidden md:flex"
    >
      Resume
    </Button>
  );
};

export default HeaderDownloadBtn;
