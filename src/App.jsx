import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

// 1. Declaramos la función del componente llamada App
const App = () => {
  // 2. El 'return' DEBE estar dentro de las llaves {} de la función
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Tienda Saludable — ¡Descubre nuestros productos naturales!"} />
    </>
  )
}

// 3. Exportamos la función para que pueda ser usada en el resto de la aplicación
export default App