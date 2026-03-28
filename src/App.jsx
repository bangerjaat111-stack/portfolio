import React from 'react'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import Home from'./component/Home.jsx'
import Skill from './component/Skill.jsx'
import Project from './component/Project.jsx'
import Footer from './component/Footer.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Home />
      <Skill />
      <Project />
      <Footer />
    </div>
  )
}
