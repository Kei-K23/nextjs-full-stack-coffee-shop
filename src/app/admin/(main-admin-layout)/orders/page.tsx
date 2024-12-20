import OrdersScreenPage from "@/features/admin/components/orders/order-screen";
import { getAllOrders, getOrderStatistics } from "@/queries";

export default async function OrderPage() {
  const [orderData, orderStatistics] = await Promise.all([
    getAllOrders(),
    getOrderStatistics(),
  ]);

  return (
    <OrdersScreenPage orderData={orderData} orderStatistics={orderStatistics} />
  );
}
