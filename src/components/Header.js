import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header(props) {
  console.warn("home",props.data)
  return (
    <div>
      <div className="add-to-cart">
          <span className='cart-count'>{props.data.length}</span>
      <AddShoppingCartIcon className='img'/>
      </div>
      </div>
      
  )
}
export default Header