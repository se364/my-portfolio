'use client' // add this line to make the component client side

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className="container h-full flex items-center justify-center px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="relative inline-block">
            <motion.div 
              className="absolute inset-0 bg-yellow-400 rounded-lg z-0"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            />
            <h1 className="text-4xl font-bold tracking-tight sm:text-4xl px-6 py-2 rounded-lg inline-block relative z-10">
              <span className="text-white">Hi, I'm</span> <span className="text-green-700 dark:text-green-600">Shah</span>
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            space, rockets, and AI :)
          </p>
          
          <div className="mt-10 flex items-center gap-6">
            <a
              href="mailto:emranshah16@gmail.com"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
              aria-label="Download Resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </a>
            
            <a
              href="https://github.com/se364"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/shahemran"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </motion.section>
      </div>
    </>
  )
}
