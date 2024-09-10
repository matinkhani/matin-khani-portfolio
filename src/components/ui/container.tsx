import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="m-auto min-h-screen w-full max-w-1440">{children}</div>
  );
};

export default Container;
