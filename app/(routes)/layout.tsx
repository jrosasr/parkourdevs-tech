import Link from "next/link";
import { CircleUser, Menu, MountainSnow, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logout from "@/components/Shared/Logout/Logout";
import { Input } from "@/components/ui/input";

export default function LayoutRoutes({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-center mx-auto w-full max-w-[1440px] min-h-screen">
      <header className="top-0 sticky flex items-center gap-4 bg-background px-4 md:px-6 border-b h-16">
        <nav className="md:flex md:flex-row flex-col md:items-center gap-6 md:gap-5 lg:gap-6 hidden font-medium text-lg md:text-sm">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold text-lg md:text-base"
          >
            <MountainSnow className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Orders
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-foreground transition-colors"
          >
            Settings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden shrink-0"
            >
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="gap-6 grid font-medium text-lg">
              <Link
                href="#"
                className="flex items-center gap-2 font-semibold text-lg"
              >
                <Package2 className="w-6 h-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4 md:ml-auto w-full">
        <form className="sm:flex-initial flex-1 ml-auto">
            <div className="relative">
              {/* <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              /> */}
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="w-5 h-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Logout />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex gap-4 md:gap-8 bg-muted/40 p-4 md:p-10 min-h-[calc(100vh_-_theme(spacing.16))]">
        {children}
      </main>
    </div>
  );
}
