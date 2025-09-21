"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  // Create multiple unique sequences for each column to ensure variety
  const createUniqueSequence = (logos: Logo[], sequenceLength: number) => {
    const sequence = []
    const available = [...logos]
    
    for (let i = 0; i < sequenceLength; i++) {
      if (available.length === 0) {
        // Reshuffle when we run out, ensuring no immediate repeats
        available.push(...shuffleArray(logos))
      }
      const randomIndex = Math.floor(Math.random() * available.length)
      sequence.push(available.splice(randomIndex, 1)[0])
    }
    return sequence
  }

  // Create longer sequences for each column to ensure variety
  const sequenceLength = Math.max(6, allLogos.length * 2)
  for (let i = 0; i < columnCount; i++) {
    columns[i] = createUniqueSequence(shuffled, sequenceLength)
  }

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    // Add some randomness to timing to prevent predictable patterns
    const baseInterval = 3000
    const randomOffset = useMemo(() => Math.random() * 500 + 250, []) // 250-750ms offset
    const cycleInterval = baseInterval + randomOffset
    const columnDelay = index * 300 + Math.random() * 200 // Add random delay
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const CurrentLogo = useMemo(() => logos[currentIndex]?.img, [logos, currentIndex])

    // Don't render if no logo available
    if (!CurrentLogo || !logos[currentIndex]) {
      return null
    }

    return (
      <motion.div
        className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}-${index}-${Math.floor(currentTime / 15000)}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <CurrentLogo className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)
  const [reshuffleKey, setReshuffleKey] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  // Reshuffle logos periodically to ensure variety
  useEffect(() => {
    const reshuffleInterval = setInterval(() => {
      setReshuffleKey(prev => prev + 1)
    }, 15000) // Reshuffle every 15 seconds
    
    return () => clearInterval(reshuffleInterval)
  }, [])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [logos, columnCount, reshuffleKey])

  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={`${index}-${reshuffleKey}`}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

export { LogoColumn };