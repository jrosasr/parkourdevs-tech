import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getUserAuth();
  if (session?.session) redirect("/dashboard");

  return ( <div className="bg-muted pt-8 h-screen">{children}</div> );
}
