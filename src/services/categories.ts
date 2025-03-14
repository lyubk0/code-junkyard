import axios from "axios";

export const getAllCategories = async (): Promise<string[] | undefined> => {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  return data;
};
