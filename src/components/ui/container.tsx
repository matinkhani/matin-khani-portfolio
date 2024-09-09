import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="m-auto min-h-screen w-full max-w-1440">
      <div className="px-4 py-10 md:px-20 md:py-[60px]">{children}</div>
    </div>
  );
};

export default Container;
