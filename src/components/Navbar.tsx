"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ShoppingBag, User, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-sm">
                        <Watch className="h-5 w-5" />
                    </span>
                    <div className="leading-tight">
                        <p className="text-sm font-semibold tracking-tight text-zinc-900">
                            Unique Items
                        </p>
                        <p className="text-[11px] text-zinc-500">Watches Store</p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {navLinks.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                                    active
                                        ? "bg-zinc-900 text-white"
                                        : "text-zinc-700 hover:bg-zinc-100"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    <div className="relative w-[260px]">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                        <Input
                            placeholder="Search watches..."
                            className="h-10 rounded-xl pl-9"
                        />
                    </div>

                    <Button variant="ghost" size="icon" className="rounded-xl">
                        <User className="h-5 w-5" />
                    </Button>

                    <Button variant="ghost" size="icon" className="rounded-xl">
                        <ShoppingBag className="h-5 w-5" />
                    </Button>

                    <Button asChild className="h-10 rounded-xl px-4">
                        <Link href="/shop">Shop</Link>
                    </Button>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <Button variant="ghost" size="icon" className="rounded-xl">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Button variant="ghost" size="icon" className="rounded-xl">
                        <ShoppingBag className="h-5 w-5" />
                    </Button>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="rounded-xl">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[320px] p-0">
                            <div className="flex items-center justify-between border-b px-4 py-4">
                                <SheetTitle className="text-base font-semibold">
                                    Menu
                                </SheetTitle>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-xl"
                                    onClick={() => setOpen(false)}
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="p-4">
                                <div className="relative">
                                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                                    <Input
                                        placeholder="Search watches..."
                                        className="h-11 rounded-xl pl-9"
                                    />
                                </div>

                                <div className="mt-4 grid gap-2">
                                    {navLinks.map((item) => {
                                        const active = pathname === item.href;
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={cn(
                                                    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                                                    active
                                                        ? "border-zinc-900 bg-zinc-900 text-white"
                                                        : "border-zinc-200 bg-white hover:bg-zinc-50"
                                                )}
                                            >
                                                {item.name}
                                                <span className="text-xs opacity-70">→</span>
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 grid gap-2">
                                    <Button asChild className="h-11 rounded-xl">
                                        <Link href="/shop" onClick={() => setOpen(false)}>
                                            Shop Watches
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-11 rounded-xl"
                                        onClick={() => setOpen(false)}
                                    >
                                        Sign In
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
