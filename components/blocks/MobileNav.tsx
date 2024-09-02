"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "./Logo";

import { navbarLinks } from "@/config/landing-page-config";
import { ModeToggle } from "./ModeToggle";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-2">
        <div className="md:hidden">
          <ModeToggle />
        </div>
        <SheetTrigger asChild>
          <Button className="md:hidden" variant="default">
            <Menu className="flex h-5 w-5" />
          </Button>
        </SheetTrigger>
      </div>

      <SheetContent side="left">
        <SheetHeader className="border-b-[1px]">
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription>
            {/* Need to put <SheetDescription> here to avoid warning */}
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col justify-center items-start gap-6 mt-6">
          {navbarLinks.map((link, i) => (
            <Link key={i} href={link.url} onClick={() => setIsOpen(false)}>
              {link.title}
            </Link>
          ))}
          <Button asChild variant="default">
            <Link href="/sign-in">Get started</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
