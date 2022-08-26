import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar"

function App() {

  const[theme, setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])
  
  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="App">
      <div >
        <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      </div>
    </div>
  )
}

export default App
