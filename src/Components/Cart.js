import { useContext } from 'react';
import { CartContext } from '../Context/Context';


const Cart = () => {
  const { cartItems } = useContext(CartContext)
  console.log("Cart", cartItems)
  const total = cartItems.reduce((a, b) => a + b.price, 0)

  return (
    <div className='cart-container'>
    <h2 className='cart-title'>Your Cart</h2>
    {cartItems.length === 0 ? (
      <p >No items in cart!</p>
    ) : (
      <ul className='list'>
        {cartItems.map((item, index) => (
          <li key={index} className='listItem'>
            <h4 className='list-title'>{item.title}</h4>
            <p className='list-desc'>{item.desc}</p>
            <p className='list-price'>${item.price}</p>
          </li>
        ))}
      </ul>
    )}
    <h3 className='total'>Total Bill: ${total}</h3>
  </div>
  )
};

export default Cart;