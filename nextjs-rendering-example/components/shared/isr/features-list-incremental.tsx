"use client";
import { useActivePillStyle } from "@/hooks/use-active-pill-style";
import { FeatureItemSkeleton } from "../feature-item-skeleton";
import { QuoteItem } from "@/@types/quotes";
import { FeatureItemIncremental } from "./feature-item-incremental";

interface Props {
  loading?: boolean;
  quotes: QuoteItem[] | null;
}

export const FeaturesListIncremental: React.FC<Props> = ({
  quotes,
  loading,
}) => {
  const { activePillStyle, setHoveredIndex, featureRefs } =
    useActivePillStyle<HTMLDivElement>();

  return (
    <div className="flex flex-col items-start w-full gap-2 relative">
      <div
        className="absolute transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff14] rounded-[10px]"
        style={{
          ...activePillStyle,
          opacity: activePillStyle ? 1 : 0,
        }}
      />
      {loading
        ? [...Array(9)].map((_, index) => <FeatureItemSkeleton key={index} />)
        : quotes?.map((quote, index) => (
            <FeatureItemIncremental
              id={quote.id as number}
              key={index}
              feature={quote}
              index={index}
              onHover={setHoveredIndex}
              featureRefs={featureRefs}
            />
          ))}
    </div>
  );
};
