import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import Logo from "./Logo";

import { navbarLinks } from "@/config/landing-page-config";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 backdrop-blur-lg w-full">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <Logo />
          </NavigationMenuItem>

          {/* mobile */}
          <MobileNav />

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {navbarLinks.map((link, i) => (
              <NavigationMenuItem key={i}>
                <Link href={link.url} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
            <Button asChild variant="default">
              <Link href="/auth/login">Get started</Link>
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
