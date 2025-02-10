"use client";

import { QuoteItem } from "@/@types/quotes";
import { CreateQuoteFormClient, FeaturesListClient } from "@/components/shared";
import { Api } from "@/services/api-client";
import React from "react";

export const dynamic = "force-dynamic";

export default function ClientSideRenderingPage() {
  const [data, setData] = React.useState<QuoteItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await Api.quotes.getQuotes();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const onChangeQuotes = async () => {
    try {
      const quotes = await Api.quotes.getQuotes();
      setData(quotes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-start gap-6 p-0 mt-[90px] mx-[84px]">
      <div className="w-full px-3">
        <h2 className="font-[var(--www-mattmannucci-me-semantic-heading-2-upper-font-family)] text-sm text-[#0e0f11] dark:text-white">
          Quotes 🤴🏻
        </h2>
        <CreateQuoteFormClient
          onChangeQuotes={onChangeQuotes}
          className="mt-4"
        />
      </div>
      <FeaturesListClient
        onChangeQuotes={onChangeQuotes}
        quotes={data}
        loading={loading}
      />
    </div>
  );
}
