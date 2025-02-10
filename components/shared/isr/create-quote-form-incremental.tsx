"use client";

import React from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { createQuote } from "@/app/actions";
import toast, { Toaster } from "react-hot-toast";
import { Api } from "@/services/api-client";

interface Props {
  className?: string;
}

export const CreateQuoteFormIncremental: React.FC<Props> = ({ className }) => {
  const [quote, setQuote] = React.useState("");

  const handleQuoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuote(event.target.value);
  };

  const onClickSend = () => {
    const response = createQuote({ title: "Your quote", quote });

    toast.promise(response, {
      loading: "Creating quote...",
      success: "Quote created successfully! (With revalidatePath)",
      error: "Error creating quote",
    });
  };

  const onClickAdd = () => {
    const response = Api.quotes.createQuote({
      title: "Your quote",
      quote: "Incremental Static Generation",
    });

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
        <Button onClick={onClickSend}>
          Send
          <ArrowRight />
        </Button>

        <Toaster />
      </div>
      <Button onClick={onClickAdd}>Add a quote without revalidatePath</Button>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {" "}
        (data will update in 60 seconds)
      </span>
    </div>
  );
};
