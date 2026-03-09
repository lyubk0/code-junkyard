import React from "react";
import { Product } from "../../@types/products";
import { ProductCard } from "./product-card";
import { Api } from "../../services/api-client";
import { useFilterStore } from "../../store/filterStore";

export const ProductList: React.FC = () => {
  const { category: selected, searchQuery } = useFilterStore();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
  const [categoryProducts, setCategoryProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await Api.products.getAllProducts();
        setProducts(products || []);
        setFilteredProducts(products || []);
      } catch (error) {
        console.error("GET_ALL_PRODUCTS_ERROR", error);
      }
    };
    fetchProducts();
  }, []);

  React.useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        if (selected === "") {
          setCategoryProducts(products);
          setFilteredProducts(products);
          return;
        }

        const data = await Api.products.getProductsByCategory(selected);
        setCategoryProducts(data || []);
        setFilteredProducts(data || []);
      } catch (error) {
        console.error("GET_PRODUCTS_BY_CATEGORY_ERROR", error);
      }
    };
    fetchProductsByCategory();
  }, [selected, products]);

  React.useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(categoryProducts);
      return;
    }

    const filtered = categoryProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, categoryProducts]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id.toString()}
          title={product.title}
          price={product.price}
          image={product.image}
          rating={product.rating.rate}
        />
      ))}
    </div>
  );
};
