"use client";

import React from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
import { Api } from "@/services/api-client";

interface Props {
  onChangeQuotes: () => void;
  className?: string;
}

export const CreateQuoteFormClient: React.FC<Props> = ({
  className,
  onChangeQuotes,
}) => {
  const [quote, setQuote] = React.useState("");

  const handleQuoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuote(event.target.value);
  };

  const handleSend = () => {
    const response = Api.quotes
      .createQuote({ title: "Your quote", quote })
      .then(() => onChangeQuotes());

    toast.promise(response, {
      loading: "Creating quote...",
      success: "Quote created successfully!",
      error: "Error creating quote",
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className={cn("flex  gap-2", className)}>
        <Input
          value={quote}
          onChange={handleQuoteChange}
          placeholder="Your the best quote!"
        />
        <Button onClick={handleSend}>
          Send
          <ArrowRight />
        </Button>

        <Toaster />
      </div>
    </div>
  );
};
