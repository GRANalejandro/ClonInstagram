import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import CentralProfile from './components/Central-profile/CentralProfile'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <CentralProfile/>
      <Aside/>
      <Footer/>
    </>
  )
}

export default App
