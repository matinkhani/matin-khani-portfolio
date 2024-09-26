"use client";
import React, { FC } from "react";
import { Button } from "../button";
import IconDownload from "@/components/icons/icon-download";

type Props = {
  className?: string;
};

const HeaderDownloadBtn: FC<Props> = ({ className }) => {
  const HandleDownloadResume = () => {
    const resumeUrl = "/files/Matin-Khani.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Matin-Khani.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={HandleDownloadResume}
      endIcon={<IconDownload />}
      className={className}
    >
      Resume
    </Button>
  );
};

export default HeaderDownloadBtn;
