import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-1440 m-auto min-h-screen w-full">{children}</div>
  );
};

export default Container;
