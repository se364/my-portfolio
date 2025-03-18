export const blogPosts = [
  {
    slug: "building-portfolio",
    title: "Building a Portfolio with Next.js and Tailwind",
    description: "Learn how I built this portfolio website using Next.js 14 and Tailwind CSS.",
    date: "April 20, 2024",
    content: `
## Why I Chose Next.js

Next.js is a powerful React framework that provides an excellent developer experience with all the features you need for production. It includes server-side rendering, static site generation, and more right out of the box.

## Styling with Tailwind CSS

Tailwind CSS has changed the way I approach styling. Instead of writing custom CSS, I can rapidly build designs directly in my markup. This makes development significantly faster while maintaining a consistent design system.

## Key Features

* Server-side rendering for better SEO
* Responsive design with Tailwind CSS
* Framer Motion animations for a polished feel
* Dynamic routing for blog posts

## Code Examples

Here's a simple example of how I implemented the animated hero section:

\`\`\`jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h1>Hi, I'm Shah</h1>
</motion.div>
\`\`\`

## Conclusion

Building this portfolio has been a great learning experience. Next.js and Tailwind CSS make an excellent combination for modern web development.
    `
  },
  {
    slug: "ai-in-space-exploration",
    title: "The Role of AI in Modern Space Exploration",
    description: "Exploring how artificial intelligence is revolutionizing how we explore the cosmos.",
    date: "April 15, 2024",
    content: `
## AI's Growing Role in Space Missions

Artificial intelligence is becoming an indispensable tool in space exploration. From autonomous rovers to satellite image analysis, AI is enabling new capabilities that were once science fiction.

## Computer Vision in Mars Rovers

The Mars rovers use advanced computer vision systems to navigate the Martian terrain. These systems allow the rovers to identify hazards, select safe paths, and even choose interesting scientific targets without direct human control.

## Analyzing Vast Amounts of Data

Space telescopes like the James Webb generate enormous amounts of data. AI algorithms help scientists sift through this data, identifying interesting phenomena that might otherwise be missed.

## Future Applications

Looking ahead, AI could enable more ambitious missions:

* Fully autonomous spacecraft for deep space exploration
* Real-time decision making for missions to distant planets
* Advanced pattern recognition for detecting signs of extraterrestrial life
* Predictive maintenance for spacecraft systems

## Conclusion

As AI continues to advance, its role in space exploration will only grow. The combination of human creativity and machine intelligence opens up exciting possibilities for discovering the secrets of our universe.
    `
  }
]; 