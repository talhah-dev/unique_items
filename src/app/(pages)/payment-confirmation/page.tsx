import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Phone, Clock, ShieldCheck } from "lucide-react"
import UserWrapper from "@/app/(wrappers)/userWrapper"

export default function PaymentConfirmationPage() {
    return (
        <UserWrapper>
            <div className="min-h-screen bg-white">
                {/* Header */}
                <section className="border-b bg-zinc-50">
                    <div className="mx-auto max-w-6xl px-4 py-12">
                        <Badge variant="secondary" className="rounded-full px-4 py-1">
                            Payment Required
                        </Badge>

                        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                            Complete Your Payment
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
                            To confirm your order, please complete the advance payment using one
                            of the methods below. Our team will verify and contact you within 24 hours.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-12">
                    <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-2">
                        {/* Left: Payment Methods */}
                        <div className="space-y-6">
                            {/* QR Code */}
                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Scan & Pay (QR Code)</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center gap-4">
                                    <div className="relative h-56 w-56 overflow-hidden rounded-xl border bg-white">
                                        <Image
                                            src="/images/payment/qr-code.png"
                                            alt="Payment QR Code"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="text-sm text-zinc-600 text-center">
                                        Scan this QR code using EasyPaisa or JazzCash to complete your payment.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Manual Payment */}
                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Manual Transfer</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="rounded-xl border bg-zinc-50 p-4">
                                        <p className="text-xs text-zinc-500">EasyPaisa</p>
                                        <p className="text-sm font-semibold text-zinc-900">
                                            03XX-XXXXXXX
                                        </p>
                                        <p className="text-xs text-zinc-600">Account: Unique Items</p>
                                    </div>

                                    <div className="rounded-xl border bg-zinc-50 p-4">
                                        <p className="text-xs text-zinc-500">JazzCash</p>
                                        <p className="text-sm font-semibold text-zinc-900">
                                            03XX-XXXXXXX
                                        </p>
                                        <p className="text-xs text-zinc-600">Account: Unique Items</p>
                                    </div>

                                    <p className="text-xs text-zinc-500">
                                        Please send the exact order amount.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right: Upload Proof */}
                        <div className="space-y-6">
                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Upload Payment Proof</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex h-44 flex-col items-center justify-center rounded-2xl border border-dashed bg-zinc-50 text-center">
                                        <Upload className="h-6 w-6 text-zinc-500" />
                                        <p className="mt-2 text-sm text-zinc-600">
                                            Upload screenshot of payment
                                        </p>
                                        <p className="text-xs text-zinc-500">
                                            JPG, PNG up to 5MB
                                        </p>
                                    </div>

                                    <Button variant="outline" className="w-full rounded-xl">
                                        Choose Image
                                    </Button>

                                    <Button className="w-full h-11 rounded-xl">
                                        Submit Payment Proof
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Info */}
                            <Card className="rounded-2xl">
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <ShieldCheck className="h-5 w-5 text-zinc-900" />
                                        <p className="text-sm text-zinc-700">
                                            Your payment is safe and will be verified manually by our team.
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 text-zinc-900" />
                                        <p className="text-sm text-zinc-700">
                                            Order confirmation within 24 hours after payment verification.
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-zinc-900" />
                                        <p className="text-sm text-zinc-700">
                                            Need help? Our support team will contact you shortly.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </UserWrapper>
    )
}
