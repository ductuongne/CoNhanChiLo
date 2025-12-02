import { useState } from 'react'
import '../styles/App.css'
import Home from './Home.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lasotuvi' element={<LaSoTuViPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App;
