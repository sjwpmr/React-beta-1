import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import { Section } from './components/Section'
import Main from './components/Main'

function App() {

  const getGreeting=(name)=>`안녕${name}`
  return (
    <div>
      <Header />
      <Main/>
      <main>
        <Section />
        <h1>hello</h1>
        <p>{getGreeting('Alice')}</p>
      </main>
      <Footer />
    </div>
  )
}

export default App