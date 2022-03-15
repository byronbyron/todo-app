import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  function handleThemeSwitch(e) {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <div className="btn-theme-wrapper">
      <button className="btn-theme" onClick={handleThemeSwitch}>
        <span className="btn-icon">
          <Image
            src="/icon-sun.svg"
            alt=""
            width="20"
            height="20"
          />
          <Image
            src="/icon-moon.svg"
            alt=""
            width="20"
            height="20"
          />
        </span>
      </button>
    </div>
  )
}
