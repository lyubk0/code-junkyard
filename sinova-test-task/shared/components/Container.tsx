import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={clsx(className, "max-w-[1280px] mx-auto")}>{children}</div>
  );
};
