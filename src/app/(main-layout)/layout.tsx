import Footer from "@/components/footer";
import NavbarHeader from "@/components/navbar-header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-playfairDisplay overflow-hidden bg-[#FDF8F3] dark:bg-gray-950">
      <NavbarHeader />
      {children}
      <Footer />
    </div>
  );
}
