import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreVertical, Pencil, Trash2, Eye } from "lucide-react"

export default function ManageProductsPage() {
    const products = [
        {
            id: "p1",
            title: "Classic Chrono Black Dial",
            category: "Men",
            price: "₨ 4,999",
            stock: "In Stock",
            image: "/images/products/p1.jpg",
            status: "Published",
        },
        {
            id: "p2",
            title: "Minimal Silver White Dial",
            category: "Women",
            price: "₨ 3,650",
            stock: "In Stock",
            image: "/images/products/p2.jpg",
            status: "Published",
        },
        {
            id: "p3",
            title: "Sport Active Silicone Strap",
            category: "Sport",
            price: "₨ 3,990",
            stock: "Low Stock",
            image: "/images/products/p3.jpg",
            status: "Published",
        },
        {
            id: "p4",
            title: "Kids Color Dial Watch",
            category: "Kids",
            price: "₨ 2,490",
            stock: "Out of Stock",
            image: "/images/products/p4.jpg",
            status: "Draft",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <section className="border-b bg-zinc-50">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <Badge variant="secondary" className="rounded-full px-4 py-1">
                                Products
                            </Badge>
                            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                                Manage Products
                            </h1>
                            <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
                                View, edit, and organize your watch listings.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 sm:flex-row">
                            <Button asChild className="h-11 rounded-xl px-5">
                                <Link href="/admin/products/new" className="inline-flex items-center gap-2">
                                    <Plus className="h-4 w-4" />
                                    Add Product
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="h-11 rounded-xl px-5">
                                <Link href="/admin" className="inline-flex items-center gap-2">
                                    Back to Dashboard
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="relative w-full max-w-md">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                            <Input className="h-11 rounded-xl pl-9" placeholder="Search products..." />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Button variant="outline" className="rounded-xl">
                                All
                            </Button>
                            <Button variant="outline" className="rounded-xl">
                                Published
                            </Button>
                            <Button variant="outline" className="rounded-xl">
                                Draft
                            </Button>
                            <Button variant="outline" className="rounded-xl">
                                Out of stock
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Card className="rounded-2xl">
                        <CardHeader className="border-b">
                            <CardTitle className="text-lg">All Products</CardTitle>
                        </CardHeader>

                        <CardContent className="p-0">
                            <div className="hidden md:grid grid-cols-[56px_1.5fr_0.8fr_0.7fr_0.7fr_0.6fr_48px] gap-4 px-6 py-4 text-xs font-semibold text-zinc-600">
                                <span>Image</span>
                                <span>Product</span>
                                <span>Category</span>
                                <span>Price</span>
                                <span>Stock</span>
                                <span>Status</span>
                                <span className="text-right">Action</span>
                            </div>

                            <div className="divide-y">
                                {products.map((p) => (
                                    <div
                                        key={p.id}
                                        className="grid grid-cols-1 gap-4 px-6 py-5 md:grid-cols-[56px_1.5fr_0.8fr_0.7fr_0.7fr_0.6fr_48px] md:items-center"
                                    >
                                        <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-zinc-50">
                                            <Image src={p.image} alt={p.title} fill className="object-cover" />
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold text-zinc-900">{p.title}</p>
                                            <p className="text-xs text-zinc-500">ID: {p.id}</p>
                                            <div className="md:hidden flex flex-wrap gap-2 pt-2">
                                                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                                                    {p.category}
                                                </span>
                                                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                                                    {p.price}
                                                </span>
                                                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                                                    {p.stock}
                                                </span>
                                                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                                                    {p.status}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="hidden md:block text-sm text-zinc-700">{p.category}</div>
                                        <div className="hidden md:block text-sm font-semibold text-zinc-900">{p.price}</div>

                                        <div className="hidden md:block">
                                            <span
                                                className={
                                                    "inline-flex rounded-full px-3 py-1 text-xs font-medium " +
                                                    (p.stock === "In Stock"
                                                        ? "bg-green-100 text-green-700"
                                                        : p.stock === "Low Stock"
                                                            ? "bg-amber-100 text-amber-700"
                                                            : "bg-red-100 text-red-700")
                                                }
                                            >
                                                {p.stock}
                                            </span>
                                        </div>

                                        <div className="hidden md:block">
                                            <span
                                                className={
                                                    "inline-flex rounded-full px-3 py-1 text-xs font-medium " +
                                                    (p.status === "Published"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-zinc-100 text-zinc-700")
                                                }
                                            >
                                                {p.status}
                                            </span>
                                        </div>

                                        <div className="flex justify-end">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="rounded-xl">
                                                        <MoreVertical className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>

                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem asChild>
                                                        <Link href={`/products/${p.id}`} className="flex items-center gap-2">
                                                            <Eye className="h-4 w-4" />
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem asChild>
                                                        <Link href={`/admin/products/${p.id}/edit`} className="flex items-center gap-2">
                                                            <Pencil className="h-4 w-4" />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                                        <Trash2 className="h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
