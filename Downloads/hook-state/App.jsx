import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // State for cart management
  const [cartItems, setCartItems] = useState([])

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      <div>
        <label>Filter by Category: </label>
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList selectedCategory={selectedCategory} onAddToCart={addToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
