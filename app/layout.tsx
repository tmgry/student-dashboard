import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarNav } from "@/components/sidebar-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StudyHub - Student Productivity Dashboard",
  description: "A comprehensive dashboard for students to manage tasks, job applications, and deadlines",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex h-screen bg-background">
            <SidebarNav />
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto px-6 py-8 lg:px-8">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
