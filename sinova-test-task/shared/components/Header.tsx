import clsx from "clsx";
import React from "react";
import { Container } from "./Container";
import Link from "next/link";
import { SearchInput } from "./SearchInput";

interface Props {
  className?: string;
  isShowSearch?: boolean;
}

export const Header: React.FC<Props> = ({ isShowSearch = true, className }) => {
  return (
    <header className={clsx(className, "")}>
      <Container className="h-16 justify-between flex items-center px-4 md:px-4 lg:px-4 py-4">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Cats</span>
            <span className="font-medium">And</span>
            <span className="text-secondary">Dogs</span>
          </h1>
        </Link>

        {isShowSearch && <SearchInput />}
      </Container>
    </header>
  );
};
