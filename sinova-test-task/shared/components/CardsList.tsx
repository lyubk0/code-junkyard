"use client";

import React from "react";
import { shuffleArray } from "../lib";
import Link from "next/link";
import { Card } from "./Card";
import { filteredBreeds } from "../lib/filteredBreeds";
import { useSearchStore } from "../store/search";

interface Props {
  className?: string;
  items: any[];
}

export const CardsList: React.FC<Props> = ({ items, className }) => {
  const { value } = useSearchStore((state) => state);
  const filteredItems = filteredBreeds(items, value);
  return (
    <div className="grid px-4 md:px-4 lg:px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item: any, i: number) => (
        <Link
          key={item.id}
          href={
            item.breeds[0].dog_friendly
              ? "/cats/" + item.breeds[0].id
              : "/dogs/" + item.breeds[0].id
          }
        >
          <Card
            isDog={item.breeds[0].dog_friendly ? false : true}
            title={item.breeds[0].name}
            imageUrl={item.url}
          />
        </Link>
      ))}
    </div>
  );
};
