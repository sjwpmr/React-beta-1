const Aside = () => {
  const links = [1, 2, 3, 4, 5, 6]

  return (
    <aside className="aside">
      <p className="section-label">&lt;ASIDE&gt; SECTION</p>
      <ul className="aside-list">
        {links.map((link) => (
          <li key={link}>links</li>
        ))}
      </ul>
    </aside>
  )
}

export default Aside