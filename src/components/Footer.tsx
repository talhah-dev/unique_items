import Link from "next/link";
import { Watch, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t bg-zinc-950 text-zinc-200">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-zinc-900">
                                <Watch className="h-5 w-5" />
                            </div>
                            <span className="text-lg font-semibold">Unique Items</span>
                        </div>
                        <p className="text-sm text-zinc-400">
                            Unique Items is your trusted online store for premium, stylish,
                            and affordable watches for men, women, and kids.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
                            Shop
                        </h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li>
                                <Link href="/shop" className="hover:text-white">
                                    All Watches
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/men" className="hover:text-white">
                                    Men Watches
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/women" className="hover:text-white">
                                    Women Watches
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/kids" className="hover:text-white">
                                    Kids Watches
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li>
                                <Link href="/about" className="hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-white">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                support@uniqueitems.pk
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                +92 300 1234567
                            </li>
                            <li className="flex gap-3 pt-2">
                                <Link
                                    href="#"
                                    className="rounded-full bg-zinc-800 p-2 hover:bg-white hover:text-zinc-900"
                                >
                                    <Facebook className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="#"
                                    className="rounded-full bg-zinc-800 p-2 hover:bg-white hover:text-zinc-900"
                                >
                                    <Instagram className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="#"
                                    className="rounded-full bg-zinc-800 p-2 hover:bg-white hover:text-zinc-900"
                                >
                                    <Twitter className="h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-500 md:flex-row">
                    <p>© {new Date().getFullYear()} Unique Items. All rights reserved.</p>
                    <p>Designed for premium watch lovers</p>
                </div>
            </div>
        </footer>
    );
}
