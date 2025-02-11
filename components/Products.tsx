import { useState, useEffect } from "react";
import { ProductsType } from "@/types/ProductsType";

const Products = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");

      if (!response.ok) {
        throw new Error(`HTTP error ! Status ${response.status}.`);
      }

      const data: ProductsType[] = await response.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <h1>Products:</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}: {product.price}</li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
