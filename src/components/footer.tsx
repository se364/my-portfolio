'use client'

export function Footer() {
  return (
    <footer className="py-8">
      <div className="container flex flex-col items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          Built by{' '}
          <a
            href="https://www.linkedin.com/in/shahemran"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
          >
            Shah Emran
          </a>
          {' | '}
          <a
            href="mailto:emranshah16@gmail.com"
            className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
          >
            emranshah16@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
} 