"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
export const runtime = "edge";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image
                  src="/logo.png?height=40&width=40"
                  alt="Bajawa Jastip Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-orange-500">
                Bajawa Jastip
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive(item.href) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/tracking">
              <Button variant="outline" size="sm">
                Track Package
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm">Jastip Sekarang!</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href="/"
                      className="flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="relative h-8 w-8 mr-2">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt="Bajawa Jastip Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-lg font-bold text-orange-500">
                        Bajawa Jastip
                      </span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4 mt-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-2 py-1 text-base font-medium rounded-md transition-colors hover:bg-gray-100 ${
                          isActive(item.href)
                            ? "text-orange-500 bg-gray-100"
                            : "text-gray-700"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-4 py-6">
                    <Link href="/tracking" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Track Package
                      </Button>
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Jastip Sekarang!</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
