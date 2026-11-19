import './Main.css'
import Section from './Section'

const Main = () => {
  return (
    <main className="main-wrap">
      <div className="left-content">
        <Section />
        <article className="article">Article</article>
      </div>
      <aside className="aside">Aside</aside>
    </main>
  )
}

export default Main