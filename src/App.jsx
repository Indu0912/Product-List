import './App.css'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
function App() {
  const [cardVisible,setCardVisible]=useState(false)
console.log(cardVisible)
  return (
    <>
    <Header cardVisible={cardVisible} setCardVisible={setCardVisible}/>
    <div className='w-full border-4 border-[#FAFAFB] divider'></div>
    <div className='flex main-section'>
      <Sidebar/>
      <MainSection cardVisible={cardVisible}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
