import './page.scss'
import Section from './components/section/section'
import Hero from './components/sections/hero/hero'
import About from './components/sections/about/about'
import Projects from './components/sections/projects/projects'
import Contact from './components/sections/contact/contact'

export default function Home() {
  
  return (
    <main className="main">
        <Section title="" hash="hero">
          <Hero/>
        </Section> 
        <Section title="About me" hash="about">
          <About />
        </Section>
        <Section title="Projects" hash="projects">
          <Projects/>
        </Section>
        <Section title="Contact" hash="contact">
          <Contact/>
        </Section>
    </main>
  )
}
