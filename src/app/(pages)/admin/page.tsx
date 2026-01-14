import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Package,
    ShoppingBag,
    Users,
    TrendingUp,
    Plus,
    ArrowRight,
    Clock,
    Truck,
    AlertCircle,
} from "lucide-react"

export default function AdminDashboardPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="border-b bg-zinc-50">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <Badge variant="secondary" className="rounded-full px-4 py-1">
                                Admin Dashboard
                            </Badge>
                            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                                Unique Items Admin
                            </h1>
                            <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
                                Manage products, track orders, and monitor store performance.
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
                                <Link href="/admin/orders" className="inline-flex items-center gap-2">
                                    View Orders <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Card className="rounded-2xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-zinc-700">
                                    Total Orders
                                </CardTitle>
                                <ShoppingBag className="h-4 w-4 text-zinc-900" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-semibold text-zinc-900">128</div>
                                <p className="mt-1 text-xs text-zinc-500">+12 this week</p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-zinc-700">
                                    Products
                                </CardTitle>
                                <Package className="h-4 w-4 text-zinc-900" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-semibold text-zinc-900">56</div>
                                <p className="mt-1 text-xs text-zinc-500">8 out of stock</p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-zinc-700">
                                    Customers
                                </CardTitle>
                                <Users className="h-4 w-4 text-zinc-900" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-semibold text-zinc-900">1,420</div>
                                <p className="mt-1 text-xs text-zinc-500">+34 new</p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-zinc-700">
                                    Revenue
                                </CardTitle>
                                <TrendingUp className="h-4 w-4 text-zinc-900" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-semibold text-zinc-900">₨ 248K</div>
                                <p className="mt-1 text-xs text-zinc-500">+9% this month</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        <Card className="rounded-2xl lg:col-span-2">
                            <CardHeader>
                                <CardTitle>Recent Orders</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {[
                                    { id: "UI-10231", name: "Ahmed Khan", status: "Processing", amount: "₨ 4,999" },
                                    { id: "UI-10230", name: "Ayesha Malik", status: "Dispatched", amount: "₨ 9,998" },
                                    { id: "UI-10229", name: "Usman Ali", status: "Delivered", amount: "₨ 3,650" },
                                    { id: "UI-10228", name: "Sara Noor", status: "Pending", amount: "₨ 2,490" },
                                ].map((o) => (
                                    <div
                                        key={o.id}
                                        className="flex flex-col gap-2 rounded-2xl border p-4 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold text-zinc-900">{o.id}</p>
                                            <p className="text-sm text-zinc-600">{o.name}</p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span
                                                className={
                                                    "rounded-full px-3 py-1 text-xs font-medium " +
                                                    (o.status === "Delivered"
                                                        ? "bg-green-100 text-green-700"
                                                        : o.status === "Dispatched"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : o.status === "Processing"
                                                                ? "bg-amber-100 text-amber-700"
                                                                : "bg-zinc-100 text-zinc-700")
                                                }
                                            >
                                                {o.status}
                                            </span>
                                            <p className="text-sm font-semibold text-zinc-900">{o.amount}</p>
                                            <Button asChild variant="outline" size="sm" className="rounded-xl">
                                                <Link href="/admin/orders">View</Link>
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-2">
                                    <Button asChild variant="outline" className="rounded-xl">
                                        <Link href="/admin/orders" className="inline-flex items-center gap-2">
                                            View All Orders <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="space-y-6">
                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Quick Actions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button asChild className="h-11 w-full rounded-xl">
                                        <Link href="/admin/products/new" className="inline-flex items-center gap-2">
                                            <Plus className="h-4 w-4" />
                                            Add New Product
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="h-11 w-full rounded-xl">
                                        <Link href="/admin/products" className="inline-flex items-center gap-2">
                                            <Package className="h-4 w-4" />
                                            Manage Products
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="h-11 w-full rounded-xl">
                                        <Link href="/admin/orders" className="inline-flex items-center gap-2">
                                            <ShoppingBag className="h-4 w-4" />
                                            Manage Orders
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Store Alerts</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-start gap-3 rounded-2xl border bg-zinc-50 p-4">
                                        <AlertCircle className="mt-0.5 h-4 w-4 text-zinc-900" />
                                        <div>
                                            <p className="text-sm font-medium text-zinc-900">Stock running low</p>
                                            <p className="text-sm text-zinc-600">
                                                8 products are close to out-of-stock.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-2xl border bg-zinc-50 p-4">
                                        <Clock className="mt-0.5 h-4 w-4 text-zinc-900" />
                                        <div>
                                            <p className="text-sm font-medium text-zinc-900">Pending orders</p>
                                            <p className="text-sm text-zinc-600">
                                                6 orders need confirmation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-2xl border bg-zinc-50 p-4">
                                        <Truck className="mt-0.5 h-4 w-4 text-zinc-900" />
                                        <div>
                                            <p className="text-sm font-medium text-zinc-900">Dispatched today</p>
                                            <p className="text-sm text-zinc-600">
                                                12 orders marked as dispatched.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
