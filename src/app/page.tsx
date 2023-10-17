import './page.scss'
import Section from './components/section/section'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Projects from './components/projects/projects'

export default function Home() {
  return (
    <main className="main">
        <Section>
          <Hero/>
        </Section> 
        <Section>
          <About/>
        </Section>
        <Section>
          <Projects/>
        </Section>
    </main>
  )
}
