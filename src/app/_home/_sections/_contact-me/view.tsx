import React from "react";
import FormContactMe from "./form-contact-me";

const ContactMeView = () => {
  return (
    <div
      id="contact-me"
      className="mt-10 flex w-full flex-col items-center bg-Primary-White md:flex-row md:gap-28"
    >
      <FormContactMe />
      <div className="flex flex-col gap-8">
        <p className="text-DisplayText(M)-ExtraBold">
          Let's talk for Something special
        </p>
        <p className="text-Paragraph-P2-Regular">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <p className="text-Paragraph-P2-Regular">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <p className="text-Heading-H5-Bold text-Primary-Black">
          ghkhanimatin@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactMeView;
