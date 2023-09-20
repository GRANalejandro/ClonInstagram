import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import CentralProfile from './components/Central-profile/CentralProfile'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'
import CentralMain from './components/Central-main/CentralMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <CentralMain/>
      <Aside/>
      <Footer/>
    </>
  )
}

export default App
