import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <div className="brand">
          <img src="/fotoinicial.jpg" alt="Tienda Saludable logo" className="site-logo" />
          <h1 className="site-title">Tienda Saludable</h1>
        </div>

        <nav>
          <ul className="nav-list">
            <li><a href="#">Dulces</a></li>
            <li><a href="#">Salados</a></li>
            <li><a href="#">Combos</a></li>
          </ul>
        </nav>

        <CartWidget count={0} />
      </div>
    </header>
  )
}

export default NavBar
