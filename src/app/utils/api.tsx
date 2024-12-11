import { Order } from "../types";

export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch("http://localhost:3030/orders");

  if (!res.ok) throw new Error("Siparişler alınırken bir sorun oluştu");
  return res.json();
};
