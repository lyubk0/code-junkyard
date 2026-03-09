import { QuoteItem } from "@/@types/quotes";

export const getQuotes = async () => {
  const url = new URL("https://67a78cad203008941f67e8e4.mockapi.io/quotes");
  url.searchParams.append("sortBy", "id");
  url.searchParams.append("order", "desc");
  const res = await fetch(url).then((res) => res.json());
  return res;
};

export const createQuote = async (item: QuoteItem) => {
  const url = new URL("https://67a78cad203008941f67e8e4.mockapi.io/quotes");
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => res.json());
  return res;
};

export const removeQuote = async (id: number) => {
  const url = new URL(
    `https://67a78cad203008941f67e8e4.mockapi.io/quotes/${id}`
  );
  const res = await fetch(url, {
    method: "DELETE",
  }).then((res) => res.json());
  return res;
};
