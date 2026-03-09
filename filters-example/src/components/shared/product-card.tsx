"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";

interface Props {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  onAddToCart?: (id: string) => void;
}

const transitionProps = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.5,
};

export const ProductCard: React.FC<Props> = ({
  id,
  title,
  price,
  originalPrice,
  image,
  rating,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className="bg-[rgba(39,39,42,0.5)] rounded-xl overflow-hidden ring-1 ring-inset ring-[hsla(0,0%,100%,0.06)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitionProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=400&width=400"}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Discount badge */}
        {originalPrice && (
          <motion.div
            className="absolute top-3 left-3 bg-[#2a1711] text-[#ff9066] px-2 py-1 rounded-full text-sm font-medium ring-1 ring-inset ring-[hsla(0,0%,100%,0.12)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transitionProps}
          >
            {discount}% OFF
          </motion.div>
        )}

        {/* Favorite button */}
        <motion.button
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFavorite(!isFavorite)}
          initial={false}
          animate={{
            backgroundColor: isFavorite ? "#2a1711" : "rgba(39, 39, 42, 0.7)",
          }}
          transition={{
            backgroundColor: { duration: 0.1 },
          }}
        >
          <Heart
            className="w-4 h-4"
            fill={isFavorite ? "#ff9066" : "none"}
            stroke={isFavorite ? "#ff9066" : "white"}
          />
        </motion.button>

        {/* Add to cart overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="bg-[#2a1711] text-[#ff9066] px-4 py-2 rounded-full text-base font-medium flex items-center space-x-2 ring-1 ring-inset ring-[hsla(0,0%,100%,0.12)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onAddToCart?.(id)}
                transition={transitionProps}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="text-white text-lg font-medium mb-1 truncate">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-4 h-4 mr-0.5"
              fill={star <= rating ? "#ff9066" : "none"}
              stroke={star <= rating ? "#ff9066" : "#666"}
            />
          ))}
          <span className="text-zinc-400 text-xs ml-1">
            ({rating.toFixed(1)})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-[#ff9066] font-semibold">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-zinc-400 text-sm line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
