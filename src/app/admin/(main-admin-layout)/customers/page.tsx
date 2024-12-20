import UsersScreenPage from "@/features/admin/components/users/users-screen";
import { getAllCustomers } from "@/queries";

export default async function CustomersPage() {
  const customers = await getAllCustomers();
  return <UsersScreenPage data={customers} />;
}
