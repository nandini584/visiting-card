import React from 'react'
import Info from "./Components/Info.jsx"
import About from "./Components/About.jsx"
import Interest from "./Components/Interest.jsx"
import Footer from "./Components/Footer.jsx"
import './App.css'
function App() {

  return (
    <div className='container'>
    <Info />
    <About />
    <Interest />
    <Footer />
    </div>
    );
}

export default App
