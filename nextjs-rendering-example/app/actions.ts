"use server";

import { revalidatePath } from "next/cache";

export const createQuote = async (formData: {
  title: string;
  quote: string;
}) => {
  try {
    const { title, quote } = formData;
    const createdQuote = await fetch(
      "https://67a78cad203008941f67e8e4.mockapi.io/quotes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          quote,
        }),
      }
    ).then((res) => res.json());
    revalidatePath("/incremental-static-generation");
    return createdQuote;
  } catch (error) {
    console.error("Error create data:", error);
  }
};

export const removeQuote = async (id: number) => {
  try {
    await fetch(`https://67a78cad203008941f67e8e4.mockapi.io/quotes/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    revalidatePath("/incremental-static-generation");
  } catch (error) {
    console.error("Error remove data:", error);
  }
};
