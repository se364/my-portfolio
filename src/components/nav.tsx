'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Fun', path: '/fun' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center px-20">
        <Link href="/" className="text-xl font-bold mr-auto">
          Shah Emran
        </Link>
        <div className="flex items-center gap-10 ml-32">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm transition-colors hover:text-green-700 ${
                pathname === item.path
                  ? 'text-green-1000 dark:text-green-600'
                  : 'text-foreground'
              }`}
            >
              {pathname === item.path && (
                <motion.div
                  className="absolute inset-0 bg-yellow-100 dark:bg-yellow-800/20 rounded-lg"
                  layoutId="navbar"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  )
} 