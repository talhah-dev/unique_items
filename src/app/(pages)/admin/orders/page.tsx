import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Search,
    MoreVertical,
    Eye,
    Truck,
    CheckCircle,
    Clock,
    XCircle,
} from "lucide-react"

export default function ManageOrdersPage() {
    const orders = [
        {
            id: "UI-10231",
            customer: "Ahmed Khan",
            phone: "+92 300 1234567",
            total: "₨ 4,999",
            payment: "COD",
            status: "Processing",
            date: "12 Jan 2026",
        },
        {
            id: "UI-10230",
            customer: "Ayesha Malik",
            phone: "+92 311 9876543",
            total: "₨ 9,998",
            payment: "COD",
            status: "Dispatched",
            date: "11 Jan 2026",
        },
        {
            id: "UI-10229",
            customer: "Usman Ali",
            phone: "+92 333 4567890",
            total: "₨ 3,650",
            payment: "COD",
            status: "Delivered",
            date: "10 Jan 2026",
        },
        {
            id: "UI-10228",
            customer: "Sara Noor",
            phone: "+92 321 2223344",
            total: "₨ 2,490",
            payment: "COD",
            status: "Cancelled",
            date: "09 Jan 2026",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="border-b bg-zinc-50">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <Badge variant="secondary" className="rounded-full px-4 py-1">
                                Orders
                            </Badge>
                            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                                Manage Orders
                            </h1>
                            <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
                                View, track, and update customer orders.
                            </p>
                        </div>

                        <Button asChild variant="outline" className="h-11 rounded-xl px-5">
                            <Link href="/admin">Back to Dashboard</Link>
                        </Button>
                    </div>

                    {/* Search & Filters */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="relative w-full max-w-md">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                            <Input
                                className="h-11 rounded-xl pl-9"
                                placeholder="Search order ID or customer..."
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Button variant="outline" className="rounded-xl">All</Button>
                            <Button variant="outline" className="rounded-xl">Processing</Button>
                            <Button variant="outline" className="rounded-xl">Dispatched</Button>
                            <Button variant="outline" className="rounded-xl">Delivered</Button>
                            <Button variant="outline" className="rounded-xl">Cancelled</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Orders Table */}
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Card className="rounded-2xl">
                        <CardHeader className="border-b">
                            <CardTitle className="text-lg">All Orders</CardTitle>
                        </CardHeader>

                        <CardContent className="p-0">
                            {/* Table Header */}
                            <div className="hidden md:grid grid-cols-[1fr_1.2fr_1fr_0.8fr_0.8fr_1fr_48px] gap-4 px-6 py-4 text-xs font-semibold text-zinc-600">
                                <span>Order ID</span>
                                <span>Customer</span>
                                <span>Phone</span>
                                <span>Total</span>
                                <span>Payment</span>
                                <span>Status</span>
                                <span className="text-right">Action</span>
                            </div>

                            {/* Rows */}
                            <div className="divide-y">
                                {orders.map((order) => (
                                    <div
                                        key={order.id}
                                        className="grid grid-cols-1 gap-4 px-6 py-5 md:grid-cols-[1fr_1.2fr_1fr_0.8fr_0.8fr_1fr_48px] md:items-center"
                                    >
                                        <div className="text-sm font-semibold text-zinc-900">
                                            {order.id}
                                            <p className="text-xs text-zinc-500 md:hidden">
                                                {order.date}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-zinc-900">{order.customer}</p>
                                            <p className="text-xs text-zinc-500">{order.date}</p>
                                        </div>

                                        <div className="text-sm text-zinc-700">{order.phone}</div>
                                        <div className="text-sm font-semibold text-zinc-900">
                                            {order.total}
                                        </div>
                                        <div className="text-sm text-zinc-700">{order.payment}</div>

                                        <div>
                                            <span
                                                className={
                                                    "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium " +
                                                    (order.status === "Delivered"
                                                        ? "bg-green-100 text-green-700"
                                                        : order.status === "Dispatched"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : order.status === "Processing"
                                                                ? "bg-amber-100 text-amber-700"
                                                                : "bg-red-100 text-red-700")
                                                }
                                            >
                                                {order.status === "Delivered" && <CheckCircle className="h-3 w-3" />}
                                                {order.status === "Dispatched" && <Truck className="h-3 w-3" />}
                                                {order.status === "Processing" && <Clock className="h-3 w-3" />}
                                                {order.status === "Cancelled" && <XCircle className="h-3 w-3" />}
                                                {order.status}
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
                                                    <DropdownMenuItem className="flex items-center gap-2">
                                                        <Eye className="h-4 w-4" />
                                                        View Order
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="flex items-center gap-2">
                                                        <Truck className="h-4 w-4" />
                                                        Mark as Dispatched
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="flex items-center gap-2">
                                                        <CheckCircle className="h-4 w-4" />
                                                        Mark as Delivered
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                                        <XCircle className="h-4 w-4" />
                                                        Cancel Order
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
