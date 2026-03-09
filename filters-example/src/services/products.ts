import axios from "axios";
import { Product } from "../@types/products";

export const getAllProducts = async (): Promise<Product[] | undefined> => {
  const { data } = await axios.get("https://fakestoreapi.com/products");

  return data;
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[] | undefined> => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );

  return data;
};
