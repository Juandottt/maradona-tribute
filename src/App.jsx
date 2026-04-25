import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Infancia from './components/sections/Infancia'
import Barcelona from './components/sections/Barcelona'
import Napoli from './components/sections/Napoli'
import Mundial86 from './components/sections/Mundial86'
import Despedida from './components/sections/Despedida'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark-bg text-white min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider" />
          <Infancia />
          <div className="section-divider" />
          <Barcelona />
          <div className="section-divider" />
          <Napoli />
          <div className="section-divider" />
          <Mundial86 />
          <div className="section-divider" />
          <Despedida />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
