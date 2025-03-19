import { Inter, Roboto_Mono } from 'next/font/google'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Shah Emran',
  description: 'random thoughts and projects',
  keywords: ['Software Engineer', 'Space', 'Rockets', 'Full Stack', 'Portfolio', 'Blog', 'Science'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-hidden">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased h-screen overflow-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <div className="relative flex h-full flex-col overflow-hidden">
            <Nav />
            <main className="flex-1 overflow-auto hide-scrollbar h-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
