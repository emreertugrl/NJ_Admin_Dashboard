import { Order, Product } from "../types";

export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch("http://localhost:3030/orders");

  if (!res.ok) throw new Error("Siparişler alınırken bir sorun oluştu");
  return res.json();
};

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("http://localhost:3030/products");

  if (!res.ok) throw new Error("Ürünler alınırken bir sorun oluştu");
  return res.json();
};

export const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`http://localhost:3030/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Ürün silinirken bir sorun oluştu");
};

export const createProduct = async (data: Product): Promise<Product> => {
  const res = await fetch("http://localhost:3030/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Ürün eklendiğinde bir sorun oluştu");

  return res.json();
};
