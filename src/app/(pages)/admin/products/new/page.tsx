import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Upload, Watch } from "lucide-react"

export default function AddNewProductPage() {
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
                                Add New Product
                            </h1>
                            <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
                                Create a new watch product for your store.
                            </p>
                        </div>

                        <Button asChild variant="outline" className="h-11 rounded-xl px-5">
                            <Link href="/admin">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Dashboard
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
                        {/* Product Form */}
                        <Card className="rounded-2xl">
                            <CardHeader>
                                <CardTitle>Product Information</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-8">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Product Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Classic Chrono Black Dial"
                                        className="h-11"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="slug">Product Slug</Label>
                                    <Input
                                        id="slug"
                                        placeholder="classic-chrono-black-dial"
                                        className="h-11"
                                    />
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="price">Price (PKR)</Label>
                                        <Input
                                            id="price"
                                            type="number"
                                            placeholder="4999"
                                            className="h-11"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="oldPrice">Old Price (optional)</Label>
                                        <Input
                                            id="oldPrice"
                                            type="number"
                                            placeholder="6499"
                                            className="h-11"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>Category</Label>
                                        <Select>
                                            <SelectTrigger className="h-11">
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="men">Men Watches</SelectItem>
                                                <SelectItem value="women">Women Watches</SelectItem>
                                                <SelectItem value="kids">Kids Watches</SelectItem>
                                                <SelectItem value="sport">Sport Watches</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Collection</Label>
                                        <Select>
                                            <SelectTrigger className="h-11">
                                                <SelectValue placeholder="Select collection" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="classic">Classic</SelectItem>
                                                <SelectItem value="minimal">Minimal</SelectItem>
                                                <SelectItem value="luxury">Luxury</SelectItem>
                                                <SelectItem value="sport">Sport</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Description</Label>
                                    <Textarea
                                        placeholder="Write product description..."
                                        className="min-h-[120px]"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Product Image</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed bg-zinc-50">
                                        <div className="text-center">
                                            <Upload className="mx-auto h-6 w-6 text-zinc-500" />
                                            <p className="mt-2 text-sm text-zinc-600">
                                                Upload product image
                                            </p>
                                            <p className="text-xs text-zinc-500">
                                                PNG, JPG up to 5MB
                                            </p>
                                        </div>
                                    </div>

                                    <Button variant="outline" className="w-full rounded-xl">
                                        Choose Image
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Product Status</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="rounded-2xl border bg-zinc-50 p-4">
                                        <p className="text-xs text-zinc-500">Visibility</p>
                                        <p className="text-sm font-medium text-zinc-900">
                                            Published
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border bg-zinc-50 p-4">
                                        <p className="text-xs text-zinc-500">Stock</p>
                                        <p className="text-sm font-medium text-zinc-900">
                                            In Stock
                                        </p>
                                    </div>

                                    <Button className="w-full h-11 rounded-xl">
                                        Save Product
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
