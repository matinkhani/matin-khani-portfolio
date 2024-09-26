import React from "react";
import FormContactMe from "./form-contact-me";
import Link from "next/link";

const ContactMeView = () => {
  return (
    <div
      id="contact-me"
      className="mt-10 flex w-full flex-col items-center bg-Primary-White md:flex-row md:gap-28"
    >
      <FormContactMe />
      <div className="mt-3 flex flex-col gap-8">
        <p className="text-DisplayText(M)-ExtraBold">
          Talk for Something special
        </p>
        <p className="text-Paragraph-P2-Regular">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <Link
          href="mailto:ghkhanimatin@gmail.com"
          className="text-Heading-H5-Bold text-Primary-Black underline"
        >
          ghkhanimatin@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default ContactMeView;
