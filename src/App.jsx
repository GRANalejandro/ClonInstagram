import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import CentralProfile from './components/Central-profile/CentralProfile'
import Footer from './components/Footer/Footer'
import CentralMain from './components/Central-main/CentralMain'
import RoutesWrapper from './components/Routing/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <RoutesWrapper>
        {/* Renderizamos el componente de navegación 'Nav' */}
          <Header/>
        </RoutesWrapper>
        <Footer/>
    </>
  )
}

export default App
