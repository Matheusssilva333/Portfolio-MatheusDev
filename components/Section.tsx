"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export default function Section({ children, className, id, delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn("py-20 md:py-32 px-6", className)}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
