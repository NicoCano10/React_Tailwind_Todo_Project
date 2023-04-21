import SunIcon from "./icons/SunIcon"
import MoonIcon from "./icons/MoonIcon"
import { useEffect, useState } from "react";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {

  const [darkMode, setDarkMode] = useState(initialStateDarkMode)

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

  }, [darkMode])

  return (
    <header className="container mx-auto p-4 pt-10 transition-all duration-1000">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">TODO</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <SunIcon /> : <MoonIcon />
          }
        </button>
      </div>
    </header>
  )
}

export default Header