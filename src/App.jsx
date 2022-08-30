import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import Maps from './pages/Maps'
import Nationatily from './pages/Nationatily';
import Sidebar from './components/Sidebar';
import Age from './pages/Age';
import Credits from './pages/Credits';

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
    <>
        <Sidebar theme={theme} handleThemeSwitch={handleThemeSwitch}/>
        <div className='md:ml-64'>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/age' element={<Age />}/>
            <Route path='/maps' element={<Maps />}/>
            <Route path='/nationality' element={<Nationatily />}/>
            <Route path='/credits' element={<Credits />}/>
            <Route path='/*' element={<Dashboard />}/>
          </Routes>
        </div>
    </>
  )
}

export default App
