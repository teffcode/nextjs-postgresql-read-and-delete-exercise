import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import { ProductsType } from "@/types/ProductsType";

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM products WHERE id=$1";
        const response = await pool.query<ProductsType[]>(query, [id]);
        if (response.rowCount > 0) {
          res.status(200).json(response.rows[0]);
        } else {
          res.status(404).json({ error: "Product not found !" });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: `HTTP error ! Status: ${res.status}` });
      }
      break;
    
    case "DELETE":
      try {
        const query = "DELETE FROM products WHERE id=$1 RETURNING *";
        const response = await pool.query<ProductsType[]>(query, [id]);
        if (response.rowCount > 0) {
          res.status(200).json({ message: "Product deleted !" });
        } else {
          res.status(404).json({ error: "Error deleting this product." });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: `HTTP error ! Status: ${res.status}` });
      }
      break;
  
    default:
      res.status(405).json({ error: "Method not allowed !" });
      break;
  }
};
