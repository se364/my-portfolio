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
  title: 'Shah Emran - Software Engineer',
  description: 'Personal portfolio and blog of a software engineer',
  keywords: ['Software Engineer', 'Web Development', 'Full Stack', 'Portfolio', 'Blog'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
