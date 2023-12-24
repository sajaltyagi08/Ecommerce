import { useState } from "react";


const ProductList =({product, AddToCart, })=> {

  


return (

    <div className="ProductList" >
        { product.map((product, i) => (

    <div>  
      
     <div className="product-Img-name" >
        <h1 className="ProductNameHome" >{product.name} </h1>
        <div className="ProductHomeCategory"> <p >🏷️
         {product.category}</p>   </div> 
          
        < img src={product.url} className="ProductHomeImage" ></img>
        </div>
        <div 
         className="product-price"> ₹{product.price}
         </div>  
         <div className="Product-Rating">{product.rating}</div>

         
         <div>  <button onClick={()=> AddToCart(product)} 
          className="AddCartButt"> 🛍️ ADD CART </button>   </div>

    </div>
    
     )) } 
      

      <div className="copyright">
      <p>&copy; 2023 MyProject.</p>
    </div>
</div>
      
) } 

export default ProductList;