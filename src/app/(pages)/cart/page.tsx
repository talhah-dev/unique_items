import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2 } from "lucide-react"
import UserWrapper from "@/app/(wrappers)/userWrapper"

export default function CartPage() {
    return (
        <UserWrapper>
            <div className="min-h-screen bg-white">
                <div className="mx-auto max-w-7xl px-4 py-14">
                    <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
                        Shopping Cart
                    </h1>

                    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
                        {/* Cart Items */}
                        <div className="space-y-6">
                            {[1, 2].map((item) => (
                                <Card key={item} className="rounded-2xl">
                                    <CardContent className="flex gap-4 p-4">
                                        <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-zinc-50">
                                            <Image
                                                src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="Watch"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col justify-between">
                                            <div>
                                                <p className="font-medium text-zinc-900">
                                                    Classic Chrono Black Dial
                                                </p>
                                                <p className="mt-1 text-sm text-zinc-500">
                                                    Stainless Steel Strap
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="icon" className="h-8 w-8">
                                                        −
                                                    </Button>
                                                    <span className="w-6 text-center text-sm">1</span>
                                                    <Button variant="outline" size="icon" className="h-8 w-8">
                                                        +
                                                    </Button>
                                                </div>

                                                <div className="flex items-center gap-4">
                                                    <p className="text-sm font-semibold text-zinc-900">
                                                        ₨ 4,999
                                                    </p>
                                                    <Button variant="ghost" size="icon">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}

                            <div className="flex justify-between">
                                <Button variant="ghost" asChild>
                                    <Link href="/shop">Continue Shopping</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <Card className="h-fit rounded-2xl">
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-lg font-semibold text-zinc-900">
                                    Order Summary
                                </h2>

                                <div className="flex justify-between text-sm text-zinc-600">
                                    <span>Subtotal</span>
                                    <span>₨ 9,998</span>
                                </div>

                                <div className="flex justify-between text-sm text-zinc-600">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>

                                <div className="border-t pt-4 flex justify-between font-semibold text-zinc-900">
                                    <span>Total</span>
                                    <span>₨ 9,998</span>
                                </div>

                                <Link href="/checkout">
                                    <Button className="w-full h-11 rounded-xl">
                                        Proceed to Checkout
                                    </Button>
                                </Link>

                                <p className="text-center mt-4 text-xs text-zinc-500">
                                    Secure checkout • COD available
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </UserWrapper>
    )
}
