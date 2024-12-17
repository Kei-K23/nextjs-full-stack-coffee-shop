"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Coffee,
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart,
  Settings,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Coffee,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function MainAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 transform transition-transform duration-200 ease-in-out border-r",
          !isSidebarOpen && "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <h2 className="text-lg font-semibold">Coffee Admin</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] py-4">
          <nav className="space-y-1 px-2">
            {sidebarNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-800 hover:text-neutral-300",
                  pathname === item.href &&
                    "bg-neutral-100 text-neutral-900 hover:bg-neutral-100 hover:text-neutral-900"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <div
        className={cn(
          "flex-1 transition-margin duration-200 ease-in-out",
          isSidebarOpen ? "ml-64" : "ml-0"
        )}
      >
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4">
          {!isSidebarOpen && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
