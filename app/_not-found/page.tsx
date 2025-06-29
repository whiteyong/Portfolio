"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">404 – Page Not Found</h1>

      <p className="text-zinc-400 mb-6 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </main>
  )
}
