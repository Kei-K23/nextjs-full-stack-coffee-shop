import { getAdminUser } from "@/features/admin/queries";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = await getAdminUser(email, password);

  return Response.json({ user });
}
