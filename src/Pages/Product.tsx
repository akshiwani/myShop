
import React, { useContext } from 'react'
import { ShopContext } from '../components/ShopContext'
import { useParams } from 'react-router-dom'; 
import breadcrum_arrow from '../components/Assets/breadcrum_arrow.png';
import './styles/Product.css';
import star_icon from '../components/Assets/star_icon.png';
import star_dull_icon from '../components/Assets/star_dull_icon.png';
import Items from '../components/Items';
import data_product from "../components/Assets/data";

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const {addToCart} = useContext(ShopContext);
  
  const product = all_product.find((e:any)=> e.id===Number(productId));
  console.log(all_product)
  console.log(productId)

   return (
    <div>
        <div className='breadcrumb'>
        Home <img src={breadcrum_arrow} alt=''/>{product.category}<img src={breadcrum_arrow} alt='' />{product.name}
    </div>
    
    <div className='productDisplay'>
        <div className='displayLeft'>
            <div className='productDisplayImage'>
                <img className="mainImg" src={product.image} alt=''/>
            </div>
           </div>
        <div className='displayRight'>
            <h1>{product.name}</h1>
            <div className="productDisplayRightStar">
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/> 
            <img src={star_dull_icon} alt=''/>
            <p>(400)</p>
            </div>
            <div className="productDisplayRightPrices">
                <div className="productNewPrice">
                    ${product.new_price}
                </div>
                <div className="productOldPrice">
                    ${product.old_price}
                </div>
            </div>
            <div className="rightProductDesc">
                A small desc about product material, fit, wash etc.
            </div>
            <div className='productSize'>
                <h1> Select Size</h1>
                <div className="productDisplaySize">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div> XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}> Add to Cart</button>
        </div>
    </div>
    <div className="popular">
        <h1>Recently Viewed</h1>
        <hr/>
        <div className='popularItem'>
            {data_product.map((item, i)=> {
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
    </div>
  )
}
 
export default Product