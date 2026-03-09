import { Countdown, CreateQuoteFormIncremental } from "@/components/shared";
import { FeaturesListIncremental } from "@/components/shared/isr/features-list-incremental";
import { Api } from "@/services/api-client";

export const revalidate = 60;

export default async function IncrementalStaticGenerationPage() {
  const data = await Api.quotes.getQuotes();

  if (!data) {
    return "Data not found";
  }

  return (
    <div className="flex flex-col items-start gap-6 p-0 mt-[90px] mx-[84px]">
      <div className="w-full px-3">
        <h2 className="font-[var(--www-mattmannucci-me-semantic-heading-2-upper-font-family)] text-sm text-[#0e0f11] dark:text-white">
          Quotes 🤴🏻
        </h2>
        <Countdown />
        <CreateQuoteFormIncremental className="mt-4" />
      </div>
      <FeaturesListIncremental quotes={data} />
    </div>
  );
}
