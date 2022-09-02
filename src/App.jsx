import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import Men from './pages/Men'
import Nationatily from './pages/Nationatily';
import Sidebar from './components/Sidebar';
import Women from './pages/Women';
import Credits from './pages/Credits';
import Error from './pages/Error';

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
          <Route path='/women' element={<Women />}/>
          <Route path='/men' element={<Men />}/>
          <Route path='/nationality' element={<Nationatily />}/>
          <Route path='/credits' element={<Credits />}/>
          <Route path='/error' element={<Error />}/>
          <Route path='/*' element={<Dashboard />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
