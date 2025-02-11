import { useState, useEffect } from "react";
import { ProductsType } from "@/types/ProductsType";

const Products = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
  
        if (!response.ok) {
          throw new Error(`HTTP error ! Status ${response.status}.`);
        }
  
        const data: ProductsType[] = await response.json();
  
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      setLoadingId(id);

      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete product: Status ${response.status}`);
      }

      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    } catch(error) {
      console.error("Error deleting product:", error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <section>
      <h1>Products:</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}: ${product.price}
            <button 
              onClick={() => handleDelete(product.id)} 
              disabled={loadingId === product.id}
            >
              {loadingId === product.id ? "Deleting..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
