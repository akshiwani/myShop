import React from "react";
import './styles/Home.css';
import shopping from '../components/Assets/shopping.png';
import new_collections from '../components/Assets/new_collections';
import Items from '../components/Items';
import data_product from "../components/Assets/data";

const Home = () => {
    return(
        <div>
        <div className="Home">
            <div className="leftSection">
                <h4>Grab your favorite styles from </h4>
                <p>End of Year Offers</p>
                <h2>Sale Live: 20 Nov - 5 Dec</h2>
                <button>Shop Now</button>
            </div>
            <div className="rightSection">
                <img src={shopping} alt="" />
            </div>
        </div>

        <div className='newCollection'>
        <h1> New Collection</h1>
        <hr/>
        <div className='collections'>
            {new_collections.map((item, i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>

    <div className='offers'>
        <div className='offersLeft'>
            <h1> Exclusive Offer for you</h1>
            <p> Only on our best sellers products<sup>*</sup></p>
        </div>
        <div className='offersRight'>
          <button>Check now</button>
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

export default Home;