import { motion } from "framer-motion";
import React from "react";

export const FilterItemSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
        backgroundColor: "rgba(39, 39, 42, 0.3)",
      }}
      transition={{
        opacity: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
        },
        backgroundColor: { duration: 0.1 },
      }}
      className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium
    whitespace-nowrap overflow-hidden ring-1 ring-inset ring-[hsla(0,0%,100%,0.06)]"
    >
      <div className="h-5 w-20 bg-zinc-700/50 rounded-full" />
    </motion.div>
  );
};
