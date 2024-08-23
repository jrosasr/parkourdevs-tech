// "use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { MountainSnow } from "lucide-react";
import { TableDataInformation } from "../../components/TableDataInformation";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function LandingPage() {
  return (
    <>
      asd
    </>
  );
}

function MountainIcon(props: any) {
  return <MountainSnow className="mx-auto w-7 h-7" />;
}
