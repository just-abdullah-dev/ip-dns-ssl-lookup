'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          <Link href="/dns-lookup" onClick={() => setOpen(false)}>
            DNS Lookup
          </Link>
          <Link href="/whats-my-ip" onClick={() => setOpen(false)}>
            What's My IP
          </Link>
          <Link href="/ssl-tls-lookup" onClick={() => setOpen(false)}>
            SSL/TLS Lookup
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

