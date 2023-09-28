import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Home(props) {
  // console.warn("home",props)
  return (
    <div>

      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
        </div>
        <div className="text-wrapper item">
          <span>
            I-Phone
          </span>
          <span>
            Price: $1000.00
          </span>
        </div>
        <div className="btn-wrapper item">
          <button 
          onClick={()=>{
            props.addToCartHandler({
              price:1000
            })
          }}
          style={{maxWidth:'85%'}}
          >Add To Cart</button>

<button className='remove-cart-btn'
          onClick={()=>{
          props.removeToCartHandler()
          }}
          style={{maxWidth:'85%'}}
          >Remove From Cart
          
          </button>
        </div>
      </div>
    </div>
  )
}
export default Home