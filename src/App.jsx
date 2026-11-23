
import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'

function App() {
  const user={
    name:'Alice',
    age:21
  }

  return (
    <main>
      <Exam3/>
      <Exam2/>
       <Exam1 {...user}/>
  <h1>hello react</h1>
   <Counter />
    </main>
  )
}

export default App
