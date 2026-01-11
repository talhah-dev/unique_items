import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

// const categories = [
//     {
//         title: "Men Watches",
//         image: "/images/categories/men.jpg",
//         href: "/category/men",
//     },
//     {
//         title: "Women Watches",
//         image: "/images/categories/women.jpg",
//         href: "/category/women",
//     },
//     {
//         title: "Sport Watches",
//         image: "/images/hero/hero-bg-3.png",
//         href: "/category/sport",
//     },
// ];
const categories = [
    {
        title: "Men Watches",
        image: "/images/hero/hero-bg-1.png",
        href: "/category/men",
    },
    {
        title: "Women Watches",
        image: "/images/hero/hero-bg-2.png",
        href: "/category/women",
    },
    {
        title: "Sport Watches",
        image: "/images/hero/hero-bg-3.png",
        href: "/category/sport",
    },
];

export default function HomeCategories() {
    return (
        <section className="w-full md:pt-10">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-10 md:mb-14 space-y-4 text-center">
                    <Badge variant="secondary" className="rounded-full px-4 py-1">
                        Categories
                    </Badge>
                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                        Shop by Category
                    </h2>
                    <p className="mx-auto max-w-xl text-sm text-zinc-600 sm:text-base">
                        Find the perfect watch for every style, age, and occasion.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((cat) => (
                        <Link
                            key={cat.title}
                            href={cat.href}
                            className="group overflow-hidden transition"
                        >
                            <div className="relative h-56 rounded-lg overflow-hidden md:h-96 w-full">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover rounded-lg  transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="md:py-7 py-4">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-base font-semibold text-zinc-900">
                                        {cat.title}
                                    </h3>

                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-zinc-900 transition group-hover:bg-zinc-900 group-hover:text-white">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>

                                <div className="mt-4 h-[2px] w-full bg-zinc-200 overflow-hidden rounded-full">
                                    <div className="h-full w-0 bg-zinc-900 transition-all duration-500 group-hover:w-full" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
