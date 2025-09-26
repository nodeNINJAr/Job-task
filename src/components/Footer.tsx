"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Apple,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" border-t footer">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="col-span-2 flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-green-700">Fresh Harvests</h2>

            <div>
                <h3 className="mb-2 text-[12px] font-medium">Download App:</h3>
              <div className=" flex gap-5 space-y-2">
                 <Button variant="outline" className="justify-start bg-primary text-white size-5/12">
                    <Apple className="size-8 mr-2 text-white" />
                    <div className="flex flex-col justify-start items-start gap-0"><p className="text-[12px]">Download on the</p> <h3 className="text-lg -m-1">App Store</h3> </div>
                    </Button>
                    <Button variant="outline" className="justify-start bg-primary text-white size-5/12">
                    <ShoppingCart className="size-8 mr-2 text-white" />
                        <div className="flex flex-col justify-start items-start gap-0"><p className="text-[12px]">Download on the</p> <h3 className="text-lg -m-1">Google Play</h3> </div>
                </Button>
               </div>
            </div>
        </div>

        {/* Quick Links 1 */}
        <div className="col-span-1">
          <h3 className="font-medium mb-3 text-[18px] text-primary">Quick links 1</h3>
          <ul className="space-y-3 text-secondary text-sm">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li><Link href="/shop" className="hover:text-green-600">Shop</Link></li>
            <li><Link href="/about" className="hover:text-green-600">About us</Link></li>
            <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>
            <li><Link href="/detail-blog" className="hover:text-green-600">Detail Blog</Link></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div className="col-span-1">
          <h3 className="font-medium mb-3 text-[18px] text-primary">Quick links 2</h3>
          <ul className="space-y-3 text-secondary text-sm">
            <li><Link href="/favorites" className="hover:text-green-600">Favorites</Link></li>
            <li><Link href="/cart" className="hover:text-green-600">Cart</Link></li>
            <li><Link href="/signin" className="hover:text-green-600">Sign in</Link></li>
            <li><Link href="/register" className="hover:text-green-600">Register</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <h3 className="font-medium mb-3 text-[18px] text-primary">Contact us</h3>
          <ul className="space-y-3 text-secondary text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-green-600" /> 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-green-600" /> Freshharvest@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-600" /> Trunking Street, Pontianak, Indonesia
            </li>
          </ul>

          <h3 className="mt-4 font-medium mb-3 text-sm text-primary">Accepted Payment Methods:</h3>
          <div className="flex items-center space-x-3 mt-2 text-muted-foreground">
            <CreditCard className="h-6 w-6" />
            <CreditCard className="h-6 w-6" />
            <CreditCard className="h-6 w-6" />
          </div>
        </div>
      </div>

      <Separator className="border-[#D9D9D9]" />

      {/* Bottom Bar */}
      <div className="max-w-6xl py-4 flex flex-col md:flex-row justify-between items-center mx-auto px-6">
        <p className="text-primary text-[12px] my-6 ">
          © Copyright 2024. All Rights Reserved by Banana Studio
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0 text-gray-600">
          <Link href="#" className="hover:text-green-600 bg-primary text-white p-3 rounded-full"><Facebook className="h-5 w-5" /></Link>
          <Link href="#" className="hover:text-green-600 bg-primary text-white p-3 rounded-full"><Twitter className="h-5 w-5" /></Link>
          <Link href="#" className="hover:text-green-600 bg-primary text-white p-3 rounded-full"><Instagram className="h-5 w-5" /></Link>
        </div>
      </div>
    </footer>
  );
}
