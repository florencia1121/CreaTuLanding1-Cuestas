import React from 'react'

const ItemListContainer = ({ greeting }) => {
	return (
		<main className="main-container">
			<h1 className="catalog-title">Catálogo</h1>
			<p>{greeting}</p>

			<section>
				{/* Aquí se mostrará en el futuro el listado de productos */}
			</section>
		</main>
	)
}

export default ItemListContainer
