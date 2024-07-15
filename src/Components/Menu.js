import React, { useState, useContext } from 'react'
import menu from '../data'
import { CartContext } from '../Context/Context'


const Menu = () => {
  const cart = useContext(CartContext);
  console.log("cart", cart)
  const [filterMenu, setFilterMenu] = useState(menu)
  const handleFilterBtn = (category) => {
  if(category === "all"){
    setFilterMenu(menu)
  }else {
      const menuCategory = menu.filter((menuItem) => menuItem.category === category);
      setFilterMenu(menuCategory);
    }
}

  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );


  const categoryBtns = categories.map(category => (
    <button key={category} type="button" className="filter-btn" onClick={() => handleFilterBtn(category)}>
      {category}
    </button>
  ));

  // Cart Function 
const handleCartBtn = (item) => {
  cart.setCartItems([
    ...cart.cartItems, item
  ])
}

  return (
      <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Menu</p>
        <h3 className='primary-heading'>Choose Your Meal</h3>
      </div>
      <div className='btn-container'>
        {categoryBtns}
      </div>
      <div className='section-center'>
        {
          filterMenu.map((item, index) => (
            <article key={index} className='menu-item'>
              <img src={item.img} alt='item-image' className='photo' />
              <div className='item-info'>
                <header>
                  <h4>{item.title}</h4>
                  <h4 className='price'>${item.price}</h4>
                </header>
                <p className='item-text'>{item.desc}</p>
                <div className='item-btn'>
                <button onClick={() => handleCartBtn(item)}>Add to Cart</button>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  );
}

export default Menu;
