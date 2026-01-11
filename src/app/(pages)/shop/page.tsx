"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Filter, Search, X } from "lucide-react";

type Category = "all" | "men" | "women" | "kids" | "sport";
type Strap = "leather" | "steel" | "silicone";
type Availability = "in" | "out";

type Product = {
    id: string;
    title: string;
    category: Category;
    strap: Strap;
    price: number;
    compareAt?: number;
    inStock: boolean;
    image: string;
    href: string;
    tag?: string;
};

const PRODUCTS: Product[] = [
    {
        id: "p1",
        title: "Classic Chrono Black Dial",
        category: "men",
        strap: "steel",
        price: 3850,
        compareAt: 4250,
        inStock: true,
        image: "/images/products/p1.jpg",
        href: "/products/p1",
        tag: "Best Seller",
    },
    {
        id: "p2",
        title: "Minimal Silver White Dial",
        category: "women",
        strap: "leather",
        price: 3650,
        compareAt: 4100,
        inStock: true,
        image: "/images/products/p2.jpg",
        href: "/products/p2",
        tag: "New",
    },
    {
        id: "p3",
        title: "Sport Active Silicone Strap",
        category: "sport",
        strap: "silicone",
        price: 3990,
        compareAt: 4490,
        inStock: true,
        image: "/images/products/p3.jpg",
        href: "/products/p3",
    },
    {
        id: "p4",
        title: "Kids Color Dial Watch",
        category: "kids",
        strap: "silicone",
        price: 2490,
        compareAt: 2990,
        inStock: false,
        image: "/images/products/p4.jpg",
        href: "/products/p4",
        tag: "Sold Out",
    },
    {
        id: "p5",
        title: "Classic Leather Brown Strap",
        category: "men",
        strap: "leather",
        price: 3290,
        compareAt: 3790,
        inStock: true,
        image: "/images/products/p1.jpg",
        href: "/products/p5",
    },
    {
        id: "p6",
        title: "Elegant Rose Gold Dial",
        category: "women",
        strap: "steel",
        price: 4190,
        compareAt: 4690,
        inStock: true,
        image: "/images/products/p2.jpg",
        href: "/products/p6",
    },
    {
        id: "p7",
        title: "Sport Black Steel Strap",
        category: "sport",
        strap: "steel",
        price: 4590,
        compareAt: 4990,
        inStock: true,
        image: "/images/products/p3.jpg",
        href: "/products/p7",
        tag: "Trending",
    },
    {
        id: "p8",
        title: "Kids Durable Strap Watch",
        category: "kids",
        strap: "silicone",
        price: 2290,
        compareAt: 2690,
        inStock: true,
        image: "/images/products/p4.jpg",
        href: "/products/p8",
    },
];

function formatPKR(n: number) {
    return `Rs.${n.toLocaleString("en-US")}.00`;
}

function getMinMax(products: Product[]) {
    const prices = products.map((p) => p.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return { min, max };
}

const CATEGORIES: { key: Category; label: string }[] = [
    { key: "all", label: "All Watches" },
    { key: "men", label: "Men Watches" },
    { key: "women", label: "Women Watches" },
    { key: "kids", label: "Kids Watches" },
    { key: "sport", label: "Sport Watches" },
];

const STRAPS: { key: Strap; label: string }[] = [
    { key: "leather", label: "Leather" },
    { key: "steel", label: "Steel" },
    { key: "silicone", label: "Silicone" },
];

const SORTS = [
    { key: "newest", label: "Newest" },
    { key: "price_asc", label: "Price: Low to High" },
    { key: "price_desc", label: "Price: High to Low" },
];

function SidebarFilters({
    category,
    setCategory,
    query,
    setQuery,
    price,
    setPrice,
    strap,
    setStrap,
    availability,
    setAvailability,
    minPrice,
    maxPrice,
    clearAll,
}: {
    category: Category;
    setCategory: (v: Category) => void;
    query: string;
    setQuery: (v: string) => void;
    price: number[];
    setPrice: (v: number[]) => void;
    strap: Strap[];
    setStrap: (v: Strap[]) => void;
    availability: Availability | "all";
    setAvailability: (v: Availability | "all") => void;
    minPrice: number;
    maxPrice: number;
    clearAll: () => void;
}) {
    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-zinc-900">Filters</p>
                    <Button variant="ghost" size="sm" className="h-8 px-2" onClick={clearAll}>
                        Clear
                    </Button>
                </div>

                <div className="mt-3 relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search watches..."
                        className="h-10 rounded-xl pl-9"
                    />
                </div>
            </div>

            <Separator />

            <div className="space-y-3">
                <p className="text-sm font-semibold text-zinc-900">Category</p>
                <div className="space-y-2">
                    {CATEGORIES.map((c) => (
                        <button
                            key={c.key}
                            type="button"
                            onClick={() => setCategory(c.key)}
                            className={cn(
                                "w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium transition",
                                category === c.key
                                    ? "border-zinc-900 bg-zinc-900 text-white"
                                    : "border-zinc-200 bg-white hover:bg-zinc-50"
                            )}
                        >
                            <span className="flex items-center justify-between">
                                {c.label}
                                <ArrowUpRight className={cn("h-4 w-4 opacity-70", category === c.key && "opacity-100")} />
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="space-y-3">
                <p className="text-sm font-semibold text-zinc-900">Price Range</p>
                <div className="rounded-2xl border bg-white p-4">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-600">{formatPKR(price[0])}</span>
                        <span className="text-zinc-600">{formatPKR(price[1])}</span>
                    </div>
                    <div className="mt-4">
                        <Slider
                            value={price}
                            onValueChange={setPrice}
                            min={minPrice}
                            max={maxPrice}
                            step={10}
                        />
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">
                        Adjust the slider to filter by price.
                    </p>
                </div>
            </div>

            <Separator />

            <div className="space-y-3">
                <p className="text-sm font-semibold text-zinc-900">Strap</p>
                <div className="space-y-2 rounded-2xl border bg-white p-4">
                    {STRAPS.map((s) => {
                        const checked = strap.includes(s.key);
                        return (
                            <div key={s.key} className="flex items-center gap-2">
                                <Checkbox
                                    id={`strap-${s.key}`}
                                    checked={checked}
                                    onCheckedChange={(v) => {
                                        const next = Boolean(v)
                                            ? Array.from(new Set([...strap, s.key]))
                                            : strap.filter((x) => x !== s.key);
                                        setStrap(next);
                                    }}
                                />
                                <Label htmlFor={`strap-${s.key}`} className="text-sm text-zinc-700">
                                    {s.label}
                                </Label>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Separator />

            <div className="space-y-3">
                <p className="text-sm font-semibold text-zinc-900">Availability</p>
                <div className="space-y-2 rounded-2xl border bg-white p-4">
                    {[
                        { key: "all", label: "All" },
                        { key: "in", label: "In Stock" },
                        { key: "out", label: "Sold Out" },
                    ].map((a) => (
                        <button
                            key={a.key}
                            type="button"
                            onClick={() => setAvailability(a.key as Availability | "all")}
                            className={cn(
                                "w-full rounded-xl border px-3 py-2 text-left text-sm transition",
                                availability === a.key
                                    ? "border-zinc-900 bg-zinc-900 text-white"
                                    : "border-zinc-200 bg-white hover:bg-zinc-50"
                            )}
                        >
                            {a.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProductCard({ p }: { p: Product }) {
    const discount =
        typeof p.compareAt === "number" && p.compareAt > p.price
            ? Math.round(((p.compareAt - p.price) / p.compareAt) * 100)
            : null;

    return (
        <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-zinc-50">
                <Link href={p.href} className="block">
                    <div className="relative aspect-[4/5] w-full">
                        <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    </div>
                </Link>

                {discount !== null && (
                    <div className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-2 text-xs font-semibold text-white">
                        -{discount}%
                    </div>
                )}

                {!p.inStock && (
                    <div className="absolute left-3 top-12 rounded-full bg-zinc-600 px-3 py-2 text-xs font-medium text-white">
                        Sold out
                    </div>
                )}
            </div>

            <div className="mt-4">
                <Link href={p.href} className="line-clamp-2 text-sm font-medium text-zinc-900 hover:underline">
                    {p.title}
                </Link>

                <div className="mt-2 flex items-center gap-2">
                    {typeof p.compareAt === "number" && (
                        <span className="text-sm text-zinc-500 line-through">
                            {formatPKR(p.compareAt)}
                        </span>
                    )}
                    <span className="text-sm font-semibold text-red-600">
                        {formatPKR(p.price)}
                    </span>
                    {p.tag && (
                        <Badge variant="secondary" className="ml-auto rounded-full">
                            {p.tag}
                        </Badge>
                    )}
                </div>

                <div className="mt-4">
                    <Button
                        asChild
                        variant="outline"
                        className={cn(
                            "h-11 w-full rounded-full border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white",
                            !p.inStock && "pointer-events-none opacity-60"
                        )}
                    >
                        <Link href={p.href}>{p.inStock ? "ADD TO CART" : "READ MORE"}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function ShopPage() {
    const { min, max } = getMinMax(PRODUCTS);

    const [category, setCategory] = React.useState<Category>("all");
    const [query, setQuery] = React.useState("");
    const [price, setPrice] = React.useState<number[]>([min, max]);
    const [strap, setStrap] = React.useState<Strap[]>([]);
    const [availability, setAvailability] = React.useState<Availability | "all">("all");
    const [sort, setSort] = React.useState<(typeof SORTS)[number]["key"]>("newest");

    React.useEffect(() => {
        setPrice([min, max]);
    }, [min, max]);

    const clearAll = () => {
        setCategory("all");
        setQuery("");
        setPrice([min, max]);
        setStrap([]);
        setAvailability("all");
        setSort("newest");
    };

    const filtered = React.useMemo(() => {
        let list = [...PRODUCTS];

        if (category !== "all") list = list.filter((p) => p.category === category);

        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter((p) => p.title.toLowerCase().includes(q));
        }

        list = list.filter((p) => p.price >= price[0] && p.price <= price[1]);

        if (strap.length) list = list.filter((p) => strap.includes(p.strap));

        if (availability !== "all") {
            list = list.filter((p) => (availability === "in" ? p.inStock : !p.inStock));
        }

        if (sort === "price_asc") list.sort((a, b) => a.price - b.price);
        if (sort === "price_desc") list.sort((a, b) => b.price - a.price);

        return list;
    }, [category, query, price, strap, availability, sort]);

    return (
        <div className="min-h-screen bg-white">
            <section className="border-b bg-zinc-50">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                                Shop
                            </h1>
                            <p className="mt-2 text-sm text-zinc-600 sm:text-base">
                                Explore all watches and filter by category, strap, and price.
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" className="rounded-xl lg:hidden">
                                        <Filter className="mr-2 h-4 w-4" />
                                        Filters
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[340px]">
                                    <SheetHeader>
                                        <SheetTitle>Filters</SheetTitle>
                                    </SheetHeader>
                                    <div className="mt-6">
                                        <SidebarFilters
                                            category={category}
                                            setCategory={setCategory}
                                            query={query}
                                            setQuery={setQuery}
                                            price={price}
                                            setPrice={setPrice}
                                            strap={strap}
                                            setStrap={setStrap}
                                            availability={availability}
                                            setAvailability={setAvailability}
                                            minPrice={min}
                                            maxPrice={max}
                                            clearAll={clearAll}
                                        />
                                    </div>
                                </SheetContent>
                            </Sheet>

                            <div className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
                                <span className="text-sm text-zinc-600">Sort:</span>
                                <select
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value as any)}
                                    className="bg-transparent text-sm font-medium text-zinc-900 outline-none"
                                >
                                    {SORTS.map((s) => (
                                        <option key={s.key} value={s.key}>
                                            {s.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Button variant="ghost" className="rounded-xl" onClick={clearAll}>
                                <X className="mr-2 h-4 w-4" />
                                Reset
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[300px_1fr] lg:px-8">
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 rounded-3xl border bg-zinc-50 p-5">
                            <SidebarFilters
                                category={category}
                                setCategory={setCategory}
                                query={query}
                                setQuery={setQuery}
                                price={price}
                                setPrice={setPrice}
                                strap={strap}
                                setStrap={setStrap}
                                availability={availability}
                                setAvailability={setAvailability}
                                minPrice={min}
                                maxPrice={max}
                                clearAll={clearAll}
                            />
                        </div>
                    </aside>

                    <div>
                        <div className="flex items-center justify-between gap-3">
                            <p className="text-sm text-zinc-600">
                                Showing <span className="font-semibold text-zinc-900">{filtered.length}</span>{" "}
                                results
                            </p>
                        </div>

                        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {filtered.map((p) => (
                                <ProductCard key={p.id} p={p} />
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div className="mt-10 rounded-3xl border bg-zinc-50 p-10 text-center">
                                <p className="text-lg font-semibold text-zinc-900">No products found</p>
                                <p className="mt-2 text-sm text-zinc-600">
                                    Try changing filters or reset to see all products.
                                </p>
                                <Button className="mt-5 rounded-xl" onClick={clearAll}>
                                    Reset Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
