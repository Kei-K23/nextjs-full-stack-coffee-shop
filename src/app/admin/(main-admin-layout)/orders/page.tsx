import OrdersScreenPage from "@/features/admin/components/orders/order-screen";
import { getAllOrders } from "@/queries";

export default async function OrderPage() {
  const orderData = await getAllOrders();

  return <OrdersScreenPage orderData={orderData} />;
}
