"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { ThemeToggle } from "@/components/ui/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "./logo"

const links = [
  { href: "/dashboard/reports", label: "Dashboard" },
  { href: "/assessment", label: "Assessments" },
  { href: "/user", label: "Users" },
  { href: "/roadmap", label: "Roadmap" },
]

export default function Header() {
  const pathname = usePathname()

  function linkClass(href: string) {
    const active =
      pathname === href || pathname.startsWith(`${href}/`)

    return buttonVariants({
      variant: active ? "secondary" : "ghost",
      size: "sm",
      className: "justify-start",
    })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex items-center justify-between"
      >
        {/* Mobile menu */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open navigation menu"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="left">
              <SheetTitle className="mb-8">
                <Logo />
              </SheetTitle>

              <ul className="flex flex-col gap-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <SheetClose
                        nativeButton={false}
                        render={
                                <Link
                                href={href}
                                aria-current={pathname === href ? "page" : undefined}
                                className={linkClass(href)}
                                >
                                {label}
                                </Link>
                      }
                    />
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation */}
        <div className="hidden sm:block">
          <Logo />
        </div>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={linkClass(href)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  )
}
