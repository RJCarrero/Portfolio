"use client"

import { useEffect, useState } from "react"

interface SkillProgressBarProps {
  name: string
  level: number
  description?: string
}

export function SkillProgressBar({ name, level, description }: SkillProgressBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedLevel(level), 100)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h4 className="text-white font-medium">{name}</h4>
        <span className="text-orange-400 text-sm font-semibold">{level}%</span>
      </div>
      {description && <p className="text-gray-400 text-sm">{description}</p>}
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  )
}
