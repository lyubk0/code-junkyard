import { CreateQuoteFormServer, FeaturesListServer } from "@/components/shared";
import { Api } from "@/services/api-client";

export const revalidate = 0;

export default async function ServerSideRenderingPage() {
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
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          Reload to see new quotes
        </div>
        <CreateQuoteFormServer className="mt-4" />
      </div>
      <FeaturesListServer quotes={data} />
    </div>
  );
}
