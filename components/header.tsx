"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useId } from "react";
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="CourierX Logo"
                width={150}
                height={50}
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About Us
              </Link>
              <Link
                href="/business"
                className="text-gray-700 hover:text-blue-600"
              >
                Business
              </Link>
              <Link
                href="/account"
                className="text-gray-700 hover:text-blue-600"
              >
                Open An Account
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>

              <div className="flex">
                
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => router.push('/login')} id={useId() }>
                  Login
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 " onClick={() => router.push('/signup')} id={useId()}>
                  SignUp
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}



