'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ObstacleAvoidingRobot() {
  return (
    <div className="container px-4 pt-24 pb-12 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Projects
        </Link>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Obstacle Avoiding Robot Using Arduino
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          The car uses a servo mounted ultrasonic sensor to detect objects in front of and
          on either side of the car and an L293D DC motor driver shield to drive four geared
          motors, one on each wheel. An Arduino underneath the shield controls the motor
          shield, ultrasonic sensor, and the servo.
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-lg border bg-card">
            <img
              src="/project-robot.jpg"
              alt="Obstacle Avoiding Robot Using Arduino"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="aspect-video overflow-hidden rounded-lg border bg-card">
            <video
              src="/project-robot.mp4"
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
