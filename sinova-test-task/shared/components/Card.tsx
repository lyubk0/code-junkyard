import clsx from "clsx";
import React from "react";
import Image from "next/image";
interface Props {
  imageUrl: string;
  title: string;
  isDog: boolean;
  className?: string;
}

export const Card: React.FC<Props> = ({
  title,
  imageUrl,
  isDog,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "rounded-3xl ring-1 cursor-pointer p-4 ring-gray-200 height-[500px]",
        isDog ? "text-secondary" : "text-primary"
      )}
    >
      <Image
        className="h-[368px] w-full object-cover rounded-lg mb-4"
        src={imageUrl}
        width={0}
        placeholder="blur"
        blurDataURL={isDog ? "/images/dog.jpg" : "/images/cat.jpg"}
        height={0}
        sizes="100vw"
        alt={title || ""}
      />
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};
