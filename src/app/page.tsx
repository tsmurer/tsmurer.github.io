import './page.scss'
import Section from './components/section/section'
import Hero from './components/hero/hero'

export default function Home() {
  return (
    <main className="main">
        <Section>
          <Hero/>
        </Section> 
    </main>
  )
}
