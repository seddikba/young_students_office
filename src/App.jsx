import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPageHandler from './routes/main/MainPageHandler'

function App() {
  const [count, setCount] = useState(1)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainPageHandler />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
