const Header = () => {
  const menus = [
    { id: 1, name: 'page 2' },
    { id: 2, name: 'page 3' },
    { id: 3, name: 'page 4' },
    { id: 4, name: 'page 5' },
    { id: 5, name: 'page 6' }
  ]

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="site-name">Site Name</h1>
        <p className="section-label">&lt;HEADER&gt; SECTION</p>
      </div>
      <div className="nav-area header-nav">
        <span className="nav-title">navigation links</span>
        <ul className="nav-list">
          {menus.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header