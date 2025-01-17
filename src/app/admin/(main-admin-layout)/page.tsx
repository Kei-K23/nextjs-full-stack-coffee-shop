import DashboardScreen from "@/features/admin/components/dashboard-screen";
import { getDashboardAnalyticData } from "@/queries";

export default async function AdminDashboard() {
  const { coffeeCount } = await getDashboardAnalyticData();
  return <DashboardScreen coffeeCount={coffeeCount} />;
}
