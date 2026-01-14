import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
    Star,
    Truck,
    ShieldCheck,
    RefreshCcw,
    Heart,
} from "lucide-react"
import UserWrapper from "@/app/(wrappers)/userWrapper"

export default function ProductDetailsPage() {
    return (
        <UserWrapper>
            <div className="min-h-screen bg-white">
                {/* Breadcrumb */}
                <section className="border-b bg-zinc-50">
                    <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-zinc-600">
                        <Link href="/" className="hover:underline">Home</Link> /{" "}
                        <Link href="/shop" className="hover:underline">Shop</Link> /{" "}
                        <span className="text-zinc-900 font-medium">
                            Classic Chrono Black Dial
                        </span>
                    </div>
                </section>

                {/* Product */}
                <section className="py-12">
                    <div className="mx-auto max-w-7xl px-4 grid gap-10 items-center lg:grid-cols-2">
                        {/* Images */}
                        <div className="space-y-4">
                            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border bg-zinc-50">
                                <Image
                                    src="/images/products/p1.jpg"
                                    alt="Watch"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="space-y-6">
                            <Badge variant="secondary" className="rounded-full px-4 py-1">
                                Men Watch
                            </Badge>

                            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                                Classic Chrono Black Dial
                            </h1>

                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="h-4 w-4 fill-zinc-900 text-zinc-900" />
                                ))}
                                <span className="text-sm text-zinc-600">(124 reviews)</span>
                            </div>

                            <div className="flex items-end gap-3">
                                <p className="text-3xl font-semibold text-zinc-900">₨ 4,999</p>
                                <p className="pb-1 text-sm text-zinc-500 line-through">₨ 6,499</p>
                            </div>

                            <p className="max-w-xl text-base leading-relaxed text-zinc-600">
                                A premium stainless steel watch with a classic black dial,
                                water-resistant build, and comfortable strap — perfect for daily
                                wear and formal occasions.
                            </p>

                            {/* Actions */}
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button className="h-11 rounded-xl w-full px-6">
                                    Add to Cart
                                </Button>
                                {/* <Button variant="outline" className="h-11 rounded-xl px-6">
                                    <Heart className="mr-2 h-4 w-4" />
                                    Wishlist
                                </Button> */}
                            </div>

                            {/* Features */}
                            <div className="grid gap-4 sm:grid-cols-3 pt-4">
                                <div className="flex items-start gap-3">
                                    <Truck className="h-5 w-5 text-zinc-900" />
                                    <p className="text-sm text-zinc-700">
                                        Fast delivery within 2–5 working days
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="h-5 w-5 text-zinc-900" />
                                    <p className="text-sm text-zinc-700">
                                        1 year warranty included
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <RefreshCcw className="h-5 w-5 text-zinc-900" />
                                    <p className="text-sm text-zinc-700">
                                        7 days easy return policy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Details */}
                {/* <section className="border-t py-12">
                    <div className="mx-auto max-w-7xl px-4 grid gap-8 lg:grid-cols-3">
                        <Card className="rounded-2xl">
                            <CardContent className="p-6">
                                <p className="text-sm text-zinc-500">Material</p>
                                <p className="text-sm font-semibold text-zinc-900">
                                    Stainless Steel
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl">
                            <CardContent className="p-6">
                                <p className="text-sm text-zinc-500">Movement</p>
                                <p className="text-sm font-semibold text-zinc-900">
                                    Quartz
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl">
                            <CardContent className="p-6">
                                <p className="text-sm text-zinc-500">Water Resistance</p>
                                <p className="text-sm font-semibold text-zinc-900">
                                    5 ATM
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section> */}

                {/* Description */}
                <section className="bg-zinc-50 py-12">
                    <div className="mx-auto max-w-4xl px-4 space-y-4">
                        <h2 className="text-2xl font-semibold text-zinc-900">
                            Product Description
                        </h2>
                        <p className="text-base leading-relaxed text-zinc-600">
                            This watch is designed for durability and elegance. Crafted with
                            premium stainless steel, it features a scratch-resistant glass,
                            accurate quartz movement, and a water-resistant build suitable for
                            everyday use. A perfect balance of style and reliability.
                        </p>
                    </div>
                </section>

                <section className="border-t bg-white py-14">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="flex items-end justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                                    Related Watches
                                </h2>
                                <p className="mt-1 text-sm text-zinc-600">
                                    You might also like these styles
                                </p>
                            </div>

                            <Link
                                href="/shop"
                                className="hidden text-sm font-medium text-zinc-900 hover:underline sm:block"
                            >
                                View all
                            </Link>
                        </div>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="group overflow-hidden rounded-2xl border bg-white transition hover:shadow-lg"
                                >
                                    <div className="relative aspect-square overflow-hidden bg-zinc-50">
                                        <img
                                            src={`/images/products/p${item}.jpg`}
                                            alt="Related watch"
                                            className="h-full w-full object-cover transition group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="space-y-3 p-4">
                                        <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                                            Men Watch
                                        </span>

                                        <h3 className="text-sm font-medium text-zinc-900 line-clamp-2">
                                            Premium Minimal Chrono Watch
                                        </h3>

                                        <div className="flex items-center justify-between">
                                            {/* <p className="text-sm font-semibold text-zinc-900">
                                                ₨ 4,499
                                            </p> */}

                                            <Button className="w-full">
                                                <Link
                                                    href={`/products/related-${item}`}
                                                    className="w-full"
                                                >
                                                    View
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center sm:hidden">
                            <Link
                                href="/shop"
                                className="text-sm font-medium text-zinc-900 underline underline-offset-4"
                            >
                                View all watches
                            </Link>
                        </div>
                    </div>
                </section>


            </div>
        </UserWrapper>
    )
}
