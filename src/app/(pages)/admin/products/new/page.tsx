"use client"

import Link from "next/link"
import axios from "axios"
import { useRef, useState } from "react"
import { upload } from "@vercel/blob/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Upload as UploadIcon, X } from "lucide-react"
import { toast } from "sonner"

type Status = "published" | "draft"

const MAX_IMAGE_BYTES = 1 * 1024 * 1024 // 1MB (change to 500 * 1024 for 500KB)
// const MAX_IMAGE_BYTES = 500 * 1024

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"]

function slugify(input: string) {
    return input
        .toLowerCase()
        .trim()
        .replace(/['"]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "")
}

function bytesToLabel(bytes: number) {
    if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
    return `${Math.round(bytes / 1024)}KB`
}

export default function AddNewProductPage() {
    const fileRef = useRef<HTMLInputElement | null>(null)

    const [loading, setLoading] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const [imageError, setImageError] = useState<string | null>(null)

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        oldPrice: "",
        category: "",
        collection: "",
        description: "",
        status: "published" as Status,
        inStock: true,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    const handlePickImage = () => {
        setImageError(null)
        fileRef.current?.click()
    }

    const resetFileInput = () => {
        if (fileRef.current) fileRef.current.value = ""
    }

    const validateImageFile = (file: File) => {
        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
            return `Only JPG, PNG, WEBP are allowed.`
        }
        if (file.size > MAX_IMAGE_BYTES) {
            return `Image is too large. Max allowed is ${bytesToLabel(MAX_IMAGE_BYTES)} (your file is ${bytesToLabel(file.size)}).`
        }
        return null
    }

    const handleUploadImage = async (file: File) => {
        const err = validateImageFile(file)
        if (err) {
            setImageError(err)
            toast(err)
            resetFileInput()
            return
        }

        const uniqueName = `${crypto.randomUUID()}-${file.name}`

        try {
            setUploading(true)
            setImageError(null)

            const blob = await upload(uniqueName, file, {
                access: "public",
                handleUploadUrl: "/api/upload",
            })

            setImageUrl(blob.url)
            toast("Image uploaded ✅")
        } catch (e: any) {
            const msg = e?.message || "Image upload failed"
            setImageError(msg)
            toast(msg)
            resetFileInput()
        } finally {
            setUploading(false)
        }
    }

    const removeImage = () => {
        setImageUrl("")
        setImageError(null)
        resetFileInput()
    }

    const handleSubmit = async () => {
        try {
            setLoading(true)

            if (!formData.name.trim()) {
                toast("Product name is required")
                return
            }
            if (!formData.price || Number(formData.price) <= 0) {
                toast("Valid price is required")
                return
            }
            if (!formData.category) {
                toast("Category is required")
                return
            }
            if (!formData.collection) {
                toast("Collection is required")
                return
            }
            if (!imageUrl) {
                toast("Product image is required")
                return
            }

            const baseSlug = slugify(formData.name)
            const uniqueSlug = `${baseSlug}-${Date.now()}`

            await axios.post("/api/admin/products", {
                name: formData.name,
                slug: uniqueSlug,
                price: Number(formData.price),
                oldPrice: formData.oldPrice ? Number(formData.oldPrice) : null,
                category: formData.category,
                collection: formData.collection,
                description: formData.description,
                imageUrl,
                status: formData.status,
                inStock: formData.inStock,
            })

            toast("Product created successfully ✅")

            setFormData({
                name: "",
                price: "",
                oldPrice: "",
                category: "",
                collection: "",
                description: "",
                status: "published",
                inStock: true,
            })
            setImageUrl("")
            setImageError(null)
            resetFileInput()
        } catch (error: any) {
            toast(error.response?.data?.message || "Something went wrong ❌")
        } finally {
            setLoading(false)
        }
    }

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
                                        value={formData.name}
                                        onChange={handleChange}
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
                                            value={formData.price}
                                            onChange={handleChange}
                                            className="h-11"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="oldPrice">Old Price (optional)</Label>
                                        <Input
                                            id="oldPrice"
                                            type="number"
                                            placeholder="6499"
                                            value={formData.oldPrice}
                                            onChange={handleChange}
                                            className="h-11"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>Category</Label>
                                        <Select
                                            value={formData.category}
                                            onValueChange={(v) => setFormData((p) => ({ ...p, category: v }))}
                                        >
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
                                        <Select
                                            value={formData.collection}
                                            onValueChange={(v) => setFormData((p) => ({ ...p, collection: v }))}
                                        >
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
                                        id="description"
                                        placeholder="Write product description..."
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="min-h-[120px]"
                                    />
                                </div>

                                <div className="rounded-2xl border bg-zinc-50 p-4">
                                    <p className="text-xs text-zinc-500">Slug (auto-generated)</p>
                                    <p className="mt-1 text-sm font-medium text-zinc-900">
                                        {formData.name ? slugify(formData.name) : "-"}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="space-y-6">
                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Product Image</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <input
                                        ref={fileRef}
                                        type="file"
                                        accept="image/jpeg,image/png,image/webp"
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0]
                                            if (file) handleUploadImage(file)
                                        }}
                                    />

                                    <div
                                        className={
                                            "relative flex h-40 items-center justify-center rounded-2xl border border-dashed bg-zinc-50 overflow-hidden " +
                                            (imageError ? "border-red-400" : "")
                                        }
                                    >
                                        {imageUrl ? (
                                            <>
                                                <img src={imageUrl} alt="Product" className="h-full w-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={removeImage}
                                                    className="absolute right-3 top-3 rounded-full bg-white/90 p-2"
                                                    aria-label="Remove image"
                                                >
                                                    <X className="h-4 w-4" />
                                                </button>
                                            </>
                                        ) : (
                                            <div className="text-center">
                                                <UploadIcon className="mx-auto h-6 w-6 text-zinc-500" />
                                                <p className="mt-2 text-sm text-zinc-600">Upload product image</p>
                                                <p className="text-xs text-zinc-500">
                                                    JPG, PNG, WEBP up to {bytesToLabel(MAX_IMAGE_BYTES)}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {imageError && (
                                        <p className="text-sm text-red-600">{imageError}</p>
                                    )}

                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full rounded-xl"
                                        onClick={handlePickImage}
                                        disabled={uploading}
                                    >
                                        {uploading ? "Uploading..." : "Choose Image"}
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Product Status</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Visibility</Label>
                                        <Select
                                            value={formData.status}
                                            onValueChange={(v: Status) => setFormData((p) => ({ ...p, status: v }))}
                                        >
                                            <SelectTrigger className="h-11">
                                                <SelectValue placeholder="Select visibility" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="published">Published</SelectItem>
                                                <SelectItem value="draft">Draft</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Stock</Label>
                                        <Select
                                            value={formData.inStock ? "in" : "out"}
                                            onValueChange={(v) => setFormData((p) => ({ ...p, inStock: v === "in" }))}
                                        >
                                            <SelectTrigger className="h-11">
                                                <SelectValue placeholder="Select stock" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="in">In Stock</SelectItem>
                                                <SelectItem value="out">Out of Stock</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Button
                                        type="button"
                                        className="w-full h-11 rounded-xl"
                                        onClick={handleSubmit}
                                        disabled={loading || uploading}
                                    >
                                        {loading ? "Saving..." : "Save Product"}
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
