'use client'

import { motion } from 'framer-motion'
import { books } from '@/data/books'

// Group books by status
const groupBooksByStatus = (books) => {
  const grouped = {
    'Currently Reading': [],
    'Completed': []
  };
  
  books.forEach(book => {
    if (grouped[book.status]) {
      grouped[book.status].push(book);
    }
  });
  
  return grouped;
};

// Sample interesting links
const interestingLinks = [
  { name: "The Technium", url: "https://kk.org/thetechnium/" },
  { name: "The Information", url: "https://moxie.org/2013/01/07/career-advice.html" },
  { name: "Hacker News", url: "https://news.ycombinator.com/" },
  { name: "Dev.to", url: "https://dev.to/" },
  { name: "Working in Progress", url: "https://worksinprogress.co/issue/king-of-fruits/" },
  { name: "Debugging Pretty", url: "https://blog.josejg.com/debugging-pretty/" },
  { name: "Typing Game", url: "https://play.typeracer.com/" },
  { name: "Tweet: Please recommend an obscure book you absolutely love!", url: "https://x.com/michael_nielsen/status/1432919969654665219?s=21" }
];

export default function Books() {
  const groupedBooks = groupBooksByStatus(books);
  
  return (
    <>
      <div className="container px-4 pt-24 pb-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl font-bold tracking-tight">Pages & Fun</h1>
          <p className="mt-4 text-lg text-muted-foreground">
           Some books I've read and some fun posts.
          </p>
        </motion.div>

        {/* Two column layout for main content */}
        <div className="w-full max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-12">
          {/* Left Column - Books */}
          <div className="space-y-12">
            {/* Currently Reading Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Currently Reading</h2>
              <ul className="list-disc pl-5 space-y-2">
                {groupedBooks['Currently Reading'].map((book, index) => (
                  <motion.li
                    key={book.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-base text-muted-foreground"
                  >
                    <span className="font-medium">{book.title}</span> by {book.author}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Completed Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Completed</h2>
              <ul className="list-disc pl-5 space-y-2">
                {groupedBooks['Completed'].map((book, index) => (
                  <motion.li
                    key={book.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-base text-muted-foreground"
                  >
                    <span className="font-medium">{book.title}</span> by {book.author}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Interesting Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Some Links</h2>
              <ul className="list-disc pl-5 space-y-2">
                {interestingLinks.map((link, index) => (
                  <motion.li
                    key={link.url}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-base text-muted-foreground"
                  >
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-green-700 hover:underline transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
} 