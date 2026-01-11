import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Expand, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Product = {
    id: string;
    title: string;
    image: string;
    href: string;
    discountPercent?: number;
    soldOut?: boolean;
    oldPrice?: number;
    price: number;
    showActions?: boolean;
    cta: "ADD_TO_CART" | "READ_MORE";
};

const products: Product[] = [
    {
        id: "p1",
        title: "Patek philip silver with black dial with day&date",
        image: "/images/products/p1.jpg",
        href: "/products/p1",
        discountPercent: 9,
        soldOut: true,
        oldPrice: 4250,
        price: 3850,
        cta: "READ_MORE",
    },
    {
        id: "p2",
        title: "Patek philip silver with white dial",
        image: "/images/products/p2.jpg",
        href: "/products/p2",
        discountPercent: 9,
        soldOut: true,
        oldPrice: 4250,
        price: 3850,
        cta: "READ_MORE",
    },
    {
        id: "p3",
        title: "Patek philip silver with tifny dial",
        image: "/images/products/p3.jpg",
        href: "/products/p3",
        discountPercent: 9,
        oldPrice: 4250,
        price: 3850,
        showActions: true,
        cta: "ADD_TO_CART",
    },
    {
        id: "p4",
        title: "Patek philip black with black dial with date",
        image: "/images/products/p4.jpg",
        href: "/products/p4",
        discountPercent: 9,
        oldPrice: 4250,
        price: 3850,
        cta: "ADD_TO_CART",
    },
];

function formatPKR(value: number) {
    return `Rs.${value.toLocaleString("en-US")}.00`;
}

export default function AllWatchesSection() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                            All Watches
                        </h2>
                        <p className="mt-2 text-sm text-zinc-600 sm:text-base">
                            Explore our latest watches with premium design and clean style.
                        </p>
                    </div>

                    <Button asChild className="hidden rounded-full px-5 sm:inline-flex">
                        <Link href="/shop" className="inline-flex items-center gap-2">
                            View All <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((p) => (
                        <div key={p.id} className="group">
                            <div className="relative overflow-hidden rounded-2xl bg-zinc-50">
                                <Link href={p.href} className="block">
                                    <div className="relative aspect-[4/5] w-full">
                                        <Image
                                            src={p.image}
                                            alt={p.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            priority={false}
                                        />
                                    </div>
                                </Link>

                                {typeof p.discountPercent === "number" && (
                                    <div className="absolute left-3 top-3 grid place-items-center rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white">
                                        -{p.discountPercent}%
                                    </div>
                                )}

                                {p.soldOut && (
                                    <div className="absolute left-3 top-16 grid place-items-center rounded-full bg-zinc-500 px-4 py-3 text-sm font-medium text-white">
                                        Sold out
                                    </div>
                                )}

                                {p.showActions && (
                                    <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <button
                                            type="button"
                                            className="grid h-11 w-11 place-items-center rounded-full bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200 hover:bg-zinc-900 hover:text-white"
                                            aria-label="Add to wishlist"
                                        >
                                            <Heart className="h-5 w-5" />
                                        </button>
                                        <button
                                            type="button"
                                            className="grid h-11 w-11 place-items-center rounded-full bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200 hover:bg-zinc-900 hover:text-white"
                                            aria-label="Quick view"
                                        >
                                            <Eye className="h-5 w-5" />
                                        </button>
                                        <button
                                            type="button"
                                            className="grid h-11 w-11 place-items-center rounded-full bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200 hover:bg-zinc-900 hover:text-white"
                                            aria-label="Expand image"
                                        >
                                            <Expand className="h-5 w-5" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <Link
                                    href={p.href}
                                    className="line-clamp-2 text-sm font-medium text-zinc-900 hover:underline"
                                >
                                    {p.title}
                                </Link>

                                <div className="mt-2 flex items-center gap-2">
                                    {typeof p.oldPrice === "number" && (
                                        <span className="text-sm text-zinc-500 line-through">
                                            {formatPKR(p.oldPrice)}
                                        </span>
                                    )}
                                    <span className="text-sm font-semibold text-red-600">
                                        {formatPKR(p.price)}
                                    </span>
                                </div>

                                <div className="mt-5">
                                    <Button
                                        asChild
                                        variant="outline"
                                        className={cn(
                                            "h-11 w-full rounded-full border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white"
                                        )}
                                    >
                                        <Link href={p.href}>
                                            {p.cta === "ADD_TO_CART" ? "ADD TO CART" : "READ MORE"}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center sm:hidden">
                    <Button asChild className="rounded-full px-6">
                        <Link href="/shop" className="inline-flex items-center gap-2">
                            View All <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
