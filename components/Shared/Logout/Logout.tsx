"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Logout() {
  return (
    <Link
      href="#"
      className="font-medium text-sm cursor-default"
      onClick={() => signOut()}
    >
      Logout
    </Link>
  );
}
