import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import { ProductsType } from "@/types/ProductsType";

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const query = "SELECT * FROM products";
      const response = await pool.query<ProductsType[]>(query);
      res.status(200).json(response.rows);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: `HTTP error ! Status: ${res.status}` });
    }
  } else {
    res.status(405).json({ error: "Method not allowed !" });
  }
};
