'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center px-4 lg:px-6 h-14">
        <Link className="flex justify-center items-center" href="#">
          <MountainIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6 ml-auto">
          <Link
            href="#"
            className="font-medium text-sm underline-offset-4 hover:underline"
            onClick={() => signOut()}
          >
            Logout
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 w-full">
          <div className="px-4 md:px-6 container">
            <div className="gap-6 lg:gap-12 grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
              <div className="lg:order-last bg-neutral-100 dark:bg-neutral-800 mx-auto rounded-xl sm:w-full overflow-hidden aspect-video object-cover lg:aspect-square" />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-bold text-3xl sm:text-5xl xl:text-6xl/none tracking-tighter">
                    The complete platform <br />
                    for building the Web
                  </h1>
                  <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                    Give your team the toolkit to stop configuring and start
                    innovating. Securely build, deploy, and scale the best web
                    experiences.
                  </p>
                </div>
                <div className="flex min-[400px]:flex-row flex-col gap-2">
                  <Link
                    className="inline-flex justify-center items-center bg-neutral-900 hover:bg-neutral-900/90 dark:hover:bg-neutral-50/90 dark:bg-neutral-50 disabled:opacity-50 shadow px-8 rounded-md focus-visible:ring-1 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-300 h-10 font-medium text-neutral-50 text-sm transition-colors focus-visible:outline-none dark:text-neutral-900 disabled:pointer-events-none"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex justify-center items-center border-neutral-200 dark:border-neutral-800 bg-white hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:bg-neutral-950 disabled:opacity-50 shadow-sm px-8 border rounded-md focus-visible:ring-1 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-300 h-10 font-medium text-sm hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors focus-visible:outline-none disabled:pointer-events-none"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-12 md:py-24 lg:py-32 w-full">
          <div className="px-4 md:px-6 container">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-lg text-sm">
                  Key Features
                </div>
                <h2 className="font-bold text-3xl md:text-4xl/tight tracking-tighter">
                  Faster iteration. More innovation.
                </h2>
                <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                  The platform for rapid progress. Let your team focus on
                  shipping features instead of managing infrastructure with
                  automated CI/CD.
                </p>
              </div>
            </div>
            <div className="items-center gap-6 lg:gap-10 grid lg:grid-cols-2 mx-auto py-12 max-w-5xl">
              <div className="lg:order-last bg-neutral-100 dark:bg-neutral-800 mx-auto rounded-xl sm:w-full overflow-hidden aspect-video object-center object-cover" />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="gap-6 grid">
                  <li>
                    <div className="gap-1 grid">
                      <h3 className="font-bold text-xl">Collaboration</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Make collaboration seamless with built-in code review
                        tools.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="gap-1 grid">
                      <h3 className="font-bold text-xl">Automation</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Automate your workflow with continuous integration.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="gap-1 grid">
                      <h3 className="font-bold text-xl">Scale</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Deploy to the cloud with a single click and scale with
                        ease.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 border-t w-full">
          <div className="px-4 md:px-6 container">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-bold text-3xl md:text-4xl tracking-tighter">
                  Sign Up for Updates
                </h2>
                <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                  Stay updated with the latest product news and updates.
                </p>
              </div>
              <div className="space-y-2 w-full max-w-sm">
                <form className="flex sm:flex-row flex-col sm:space-x-2 space-y-2 sm:space-y-0">
                  <input
                    className="flex-1 px-4 py-2 border border-border rounded-md max-w-lg"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center bg-neutral-900 hover:bg-neutral-900/90 dark:hover:bg-neutral-50/90 dark:bg-neutral-50 disabled:opacity-50 shadow px-4 rounded-md focus-visible:ring-1 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-300 h-10 font-medium text-neutral-50 text-sm transition-colors focus-visible:outline-none dark:text-neutral-900 disabled:pointer-events-none"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex sm:flex-row flex-col items-center gap-2 px-4 md:px-6 py-6 border-t w-full shrink-0">
        <p className="text-neutral-500 text-xs dark:text-neutral-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 sm:ml-auto">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
