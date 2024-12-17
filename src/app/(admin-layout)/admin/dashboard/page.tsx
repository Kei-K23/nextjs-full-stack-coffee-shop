import { auth } from "@/lib/auth";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session?.user) {
    return <div>No session</div>;
  }

  return (
    <div>
      Admin dashboard {session.user.name}{" "}
      {session.user.isAdmin ? "Admin" : "Not Admin"}
    </div>
  );
}
