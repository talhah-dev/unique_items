import React from 'react'
import { CardContent } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import Link from 'next/link'
import { Textarea } from './ui/textarea'

export default function ContactUsForm() {
    return (
        <div>
            <CardContent className="mt-2">
                <form className="space-y-6">
                    <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                        <div className="md:col-span-1">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                placeholder="First name"
                                className="mt-2 h-10 bg-white shadow-none"
                            />
                        </div>
                        <div className="md:col-span-1">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                placeholder="Last name"
                                className="mt-2 h-10 bg-white shadow-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@email.com"
                                className="mt-2 h-10 bg-white shadow-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="number">Whatsapp Number</Label>
                            <Input
                                id="number"
                                type="number"
                                placeholder="0300 0000000"
                                className="mt-2 h-10 bg-white shadow-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                placeholder="Order issue / Return / Product question"
                                className="mt-2 h-10 bg-white shadow-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Write your message here..."
                                className="mt-2 bg-white shadow-none"
                                rows={6}
                            />
                        </div>

                        {/* <div className="md:col-span-2 flex items-center gap-2">
                            <Checkbox id="acceptTerms" className="bg-background" />
                            <Label htmlFor="acceptTerms" className="gap-0">
                                You agree to our
                                <Link href="/terms" className="ml-1 underline">
                                    terms and conditions
                                </Link>
                                <span>.</span>
                            </Label>
                        </div> */}
                    </div>

                    <Button className="w-full" size="lg">
                        Submit
                    </Button>
                </form>
            </CardContent>
        </div>
    )
}
