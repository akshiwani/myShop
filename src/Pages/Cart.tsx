import React, {useContext} from "react";
import './styles/Cart.css';
import { ShopContext } from '../components/ShopContext';
import remove_icon from '../components/Assets/cart_cross_icon.png';

const Cart = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart}= useContext(ShopContext);

    return (
    <div className='cartItems'>
        <div className="cartFormatMain">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e: any)=>{
             if(cartItems[e.id]>0)
             {
                return <div>
                    <div className="cartItemsFormat cartFormatMain">
                        <img src={e.image} alt='' className='cartProductIcon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartItemsQuantity'>{cartItems[e.id]} </button>
                        <p>{e.new_price*cartItems[e.id]}</p>
                        <img className='cartProductRemoveIcon' src={remove_icon} alt='' onClick={()=> {removeFromCart(e.id)}}/>
                    </div>
                     <hr />
                     </div>
             }
             return null;
          })}
          <div className="cartItemsDown">
            <div className="cartItemsTotal">
                <h1> Cart Total</h1>
                <div>
                    <div className="cartItemsTotalItem">
                        <p> SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItemsTotalItem">
                        <p> Shipping Charges</p>
                        <p> Free</p>
                    </div>
                    <hr />
                    <div className="cartItemsTotalItem">
                        <h3> Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button> Proceed to Checkout</button>
            </div>
          </div> 
    </div>
    )
}

export default Cart;