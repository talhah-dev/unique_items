import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Truck, Wallet } from "lucide-react";
import UserWrapper from "@/app/(wrappers)/userWrapper";

export default function CheckoutPage() {
    return (
        <UserWrapper>
            <div className="min-h-screen bg-white">
                <section className="border-b bg-zinc-50">
                    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <Badge variant="secondary" className="rounded-full px-4 py-1">
                            Checkout
                        </Badge>
                        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                            Complete your order
                        </h1>
                        <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
                            Enter your shipping details and confirm your payment method. Cash on
                            Delivery (COD) is available.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            <div className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3">
                                <Truck className="h-5 w-5 text-zinc-900" />
                                <div>
                                    <p className="text-sm font-medium text-zinc-900">Fast Delivery</p>
                                    <p className="text-xs text-zinc-600">2–5 working days</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3">
                                <Wallet className="h-5 w-5 text-zinc-900" />
                                <div>
                                    <p className="text-sm font-medium text-zinc-900">COD Available</p>
                                    <p className="text-xs text-zinc-600">Pay at your doorstep</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3">
                                <ShieldCheck className="h-5 w-5 text-zinc-900" />
                                <div>
                                    <p className="text-sm font-medium text-zinc-900">Secure Checkout</p>
                                    <p className="text-xs text-zinc-600">Safe packaging</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Shipping Details</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" placeholder="Muhammad" className="h-11" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" placeholder="Talha" className="h-11" />
                                        </div>

                                        <div className="space-y-2 md:col-span-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input id="phone" placeholder="+92 3xx xxx xxxx" className="h-11" />
                                        </div>

                                        <div className="space-y-2 md:col-span-2">
                                            <Label htmlFor="email">Email (optional)</Label>
                                            <Input id="email" type="email" placeholder="you@email.com" className="h-11" />
                                        </div>

                                        <div className="space-y-2 md:col-span-2">
                                            <Label htmlFor="address">Full Address</Label>
                                            <Textarea
                                                id="address"
                                                placeholder="House no, street, area..."
                                                className="min-h-[110px]"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" placeholder="Karachi" className="h-11" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="postal">Postal Code (optional)</Label>
                                            <Input id="postal" placeholder="75500" className="h-11" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-sm font-semibold text-zinc-900">Payment Method</p>
                                        <RadioGroup defaultValue="cod" className="grid gap-3">
                                            <label className="flex cursor-pointer items-center justify-between rounded-2xl border p-4">
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="cod" id="cod" />
                                                    <div>
                                                        <p className="text-sm font-medium text-zinc-900">Cash on Delivery</p>
                                                        <p className="text-xs text-zinc-600">Pay when you receive the order</p>
                                                    </div>
                                                </div>
                                                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                                                    Recommended
                                                </span>
                                            </label>

                                            <label className="flex cursor-pointer items-center justify-between rounded-2xl border p-4 opacity-70">
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="online" id="online" />
                                                    <div>
                                                        <p className="text-sm font-medium text-zinc-900">Online Payment</p>
                                                        <p className="text-xs text-zinc-600">Card / Bank transfer (Coming soon)</p>
                                                    </div>
                                                </div>
                                                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                                                    Soon
                                                </span>
                                            </label>
                                        </RadioGroup>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="space-y-6">
                                <Card className="rounded-2xl">
                                    <CardHeader>
                                        <CardTitle>Order Summary</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-5">
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-zinc-50">
                                                <Image
                                                    src="/images/products/p1.jpg"
                                                    alt="Watch"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-zinc-900">
                                                    Classic Chrono Black Dial
                                                </p>
                                                <p className="text-xs text-zinc-600">Qty: 1</p>
                                            </div>
                                            <p className="text-sm font-semibold text-zinc-900">₨ 4,999</p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-zinc-50">
                                                <Image
                                                    src="/images/products/p2.jpg"
                                                    alt="Watch"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-zinc-900">
                                                    Minimal Silver White Dial
                                                </p>
                                                <p className="text-xs text-zinc-600">Qty: 1</p>
                                            </div>
                                            <p className="text-sm font-semibold text-zinc-900">₨ 4,999</p>
                                        </div>

                                        <div className="border-t pt-4 space-y-2 text-sm text-zinc-700">
                                            <div className="flex justify-between">
                                                <span>Subtotal</span>
                                                <span>₨ 9,998</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Shipping</span>
                                                <span>Free</span>
                                            </div>
                                        </div>

                                        <div className="border-t pt-4 flex items-center justify-between">
                                            <span className="text-sm font-semibold text-zinc-900">Total</span>
                                            <span className="text-lg font-semibold text-zinc-900">₨ 9,998</span>
                                        </div>

                                        <Link href="/payment-confirmation">
                                            <Button className="h-11 w-full rounded-xl">Place Order</Button>
                                        </Link>

                                        <Button asChild variant="outline" className="h-11 mt-3 w-full rounded-xl">
                                            <Link href="/cart">Back to Cart</Link>
                                        </Button>

                                        <p className="text-center text-xs text-zinc-500">
                                            By placing your order, you agree to our terms and privacy policy.
                                        </p>
                                    </CardContent>
                                </Card>

                                <div className="rounded-2xl border bg-zinc-50 p-5">
                                    <p className="text-sm font-semibold text-zinc-900">Need help?</p>
                                    <p className="mt-1 text-sm text-zinc-600">
                                        Contact us for order updates or product questions.
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                        <Button asChild variant="outline" className="rounded-xl">
                                            <Link href="/contact">Contact</Link>
                                        </Button>
                                        <Button asChild className="rounded-xl">
                                            <Link href="/shop">Shop More</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </UserWrapper>
    );
}
