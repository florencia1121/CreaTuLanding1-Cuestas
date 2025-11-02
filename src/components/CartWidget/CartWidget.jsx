import React from 'react'

const CartWidget = ({ count = 0 }) => {
	return (
		<div className="cart-widget">
			<img src="/cart.svg" alt="carrito" className="cart-icon" />
			<span className="cart-count">{count}</span>
		</div>
	)
}

export default CartWidget
