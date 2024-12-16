import OrdersTable from "@/app/components/table/OrdersTable";
import { Order } from "@/app/types";
import { getOrders } from "@/app/utils/api";

const Orders = async () => {
  const orders: Order[] = await getOrders();
  return (
    <div>
      <h1 className="title">Siparişler</h1>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default Orders;
