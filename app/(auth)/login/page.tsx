"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInForm } from "@/app/(auth)/login/components/SignInForm";
import { SignUpForm } from "./components/SignUpForm";

export default function SignInPage () {
  return (
    <div className="flex justify-center">
      <main className="bg-popover my-4 p-10 rounded-lg max-w-lg">
        <h1 className="font-bold text-3xl text-center">Welcome</h1>
        <div className="mt-4">
          <Tabs defaultValue="signIn" className="w-[400px]">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="signIn">Sign In</TabsTrigger>
              <TabsTrigger value="signUp">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signIn">
              <SignInForm />
            </TabsContent>
            <TabsContent value="signUp">
              <SignUpForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};
