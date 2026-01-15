'use client'

import { motion } from "framer-motion"

export default function AnimatedCarLogo() {
  return (
    <div className="relative w-32 h-20 overflow-visible flex items-center justify-center">
      {/* Road line */}
      <motion.div 
        className="absolute bottom-2 w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      {/* Moving dashes on the road for speed effect */}
      <motion.div 
         className="absolute bottom-2 w-full h-1 overflow-hidden"
      >
        {[1, 2, 3].map((i) => (
             <motion.div
                key={i}
                className="absolute top-0 w-4 h-full bg-zinc-400/50 dark:bg-zinc-600/50 rounded-full"
                initial={{ left: "100%" }}
                animate={{ left: "-20%" }}
                transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.5 
                }}
             />
        ))}
      </motion.div>

      {/* Car Body */}
      <motion.div
        className="relative z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 50, 
          damping: 15,
          duration: 1.2
        }}
      >
        <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        >
            <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600 dark:text-blue-400 fill-blue-100/20 dark:fill-blue-900/20"
            >
            <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
            <circle cx="6.5" cy="16.5" r="2.5" />
            <circle cx="16.5" cy="16.5" r="2.5" />
            </svg>
        </motion.div>
        
        {/* Wind effect lines */}
        <motion.div 
            className="absolute -right-4 top-2 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >
             <motion.div 
                className="w-4 h-0.5 bg-blue-300 dark:bg-blue-700/50 rounded-full"
                animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
             />
             <motion.div 
                className="w-6 h-0.5 bg-blue-300 dark:bg-blue-700/50 rounded-full ml-2"
                animate={{ x: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
             />
        </motion.div>
      </motion.div>
    </div>
  )
}
