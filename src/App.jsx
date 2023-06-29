import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SampleContent from './pages/SampleContent'
function App() {

  return (<>
  <Header  />

  

    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Sidebar />}>
      <Route index element = {<SampleContent />}/>   
      </Route>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
