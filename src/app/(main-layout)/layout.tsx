import Footer from "@/components/footer";
import NavbarHeader from "@/components/navbar-header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-playfairDisplay overflow-hidden">
      <NavbarHeader />
      {children}
      <Footer />
    </div>
  );
}
