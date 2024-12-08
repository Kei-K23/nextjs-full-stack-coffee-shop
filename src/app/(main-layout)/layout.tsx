import NavbarHeader from "@/components/navbar-header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-playfairDisplay">
      <NavbarHeader />
      {children}
    </div>
  );
}
