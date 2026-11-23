
import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import FocusInput from './components/Focuslnput'
import ClickLogger from './components/ClickLogger'

function App() {
  const user={
    name:'Alice',
    age:21
  }

  return (
    <main>
      <FocusInput/>
  <h1>hello react</h1>
   <Counter />
   <ClickLogger/>
    </main>
  )
}

export default App
