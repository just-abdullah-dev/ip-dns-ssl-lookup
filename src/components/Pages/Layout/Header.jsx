import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-primary"
          >
            <Globe className="h-6 w-6" />
            <span>IP-DNS-SSL-Lookup</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link className=" px-2 hover:underline" href="/dns-lookup">DNS Lookup</Link>

            <Link className=" px-2 hover:underline" href="/whats-my-ip">What's My IP</Link>

            <Link className=" px-2 hover:underline" href="/ssl-tls-lookup">SSL/TLS Lookup</Link>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
