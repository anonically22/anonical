import Hero from '../components/Hero'
import About from '../components/About'
import Process from '../components/Process'
import Projects from '../components/Projects'
import Other from '../components/Other'

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Process />
      <Other />
    </main>
  )
}
