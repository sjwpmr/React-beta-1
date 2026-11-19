import React from 'react'

const Footer = () => {
  const menus = [
    { id: 1, name: 'contact us' },
    { id: 2, name: 'affiliates' },
    { id: 3, name: 'help' },
    { id: 4, name: 'follow us' }
  ]

  return (
    <footer className="footer">
      <p className="section-label">&lt;FOOTER&gt; SECTION</p>
      <div className="nav-area footer-nav">
        <span className="nav-title">navigation links</span>
        <ul className="nav-list">
          {menus.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer