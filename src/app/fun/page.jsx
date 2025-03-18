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
          <h1 className="text-4xl font-bold tracking-tight">Books and fun</h1>
          <p className="mt-4 text-lg text-muted-foreground">
           Some books I've read and some fun posts.
          </p>
        </motion.div>

        {/* Currently Reading Section */}
        <div className="w-full max-w-2xl mx-auto mt-16">
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
        </div>

        {/* Completed Section */}
        <div className="w-full max-w-2xl mx-auto mt-12">
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
      </div>
    </>
  )
} 