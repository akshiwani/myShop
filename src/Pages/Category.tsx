import React, { useContext } from "react";
import './styles/Category.css';
import { ShopContext } from "../components/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import  Items from "../components/Items";

const Category = (props: any) => {
    const {all_product} = useContext(ShopContext);
    return(
        <div className='category'>
            <img src={props.banner} alt=""/>
            <div className="categoryIndexSort">
                <p>
                    <span>Showing 1-12</span> &nbsp; out of 36 products
                </p>
                
            </div>
            <div className="categoryProducts">
                {all_product.map((item:any,i:number) => {
                    if (props.category=== item.category){
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else{
                        return null;
                    }
                })
                }
            </div> 
            <div className="moreProducts">
                Explore More
            </div>

        </div> 
    ) 
}

export default Category;