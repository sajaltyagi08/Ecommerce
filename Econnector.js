import React, { useState, useEffect } from "react"
import CartPage from "../Ecommerce/CartPage";
import HeaderPage from "../Ecommerce/HeaderPage";
import ProductList from "../Ecommerce/ProductList";
import CheckOut from "./CheckOut";




const Econnector=()=>{

    const [product, setproduct] = useState([
   
   {
     url:  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/iphone_15_news_0-sixteen_nine.jpg?VersionId=If7VyV8mETJ7xFzWpS7kgW7Mr.WRvSjk',
     name: "i-Phone 14 pro",
     category: "Mobile ",
     price: 99999,
     rating: "★★★★☆"
     

   } , 
   {
  url : "https://m.media-amazon.com/images/I/81pRWxXq16L._AC_UY327_FMwebp_QL65_.jpg",
  name : "HP LAPTOP",
  category: "Laptop",
  price: 75000,
  rating: "★★★☆☆"
   },

   {
    url : "https://m.media-amazon.com/images/I/61eEetcCb9L._SX679_.jpg",
    name : "Flip-Up Helmet for Men",
    category: "Helmet",
    price: 999,
    rating: "★★★★★"
     },

     {
      url : "https://m.media-amazon.com/images/I/51sTXvsanQL._AC_UL480_FMwebp_QL65_.jpg",
      name : "Carrier 1.5 Ton 3 Star AI Flexicool Inverter Split AC ",
      category: "AC",
      price: 35000,
      rating: "★★★★☆"
       },

       {
        url : "https://m.media-amazon.com/images/I/61I2Sze2ubL._AC_UL480_FMwebp_QL65_.jpg",
        name : "LG 20 L Solo Microwave Oven (MS2043DB, Black)",
        category: "Microwave",
        price: 8650,
        rating: "★★★☆☆"
         },

         {
          url : "https://m.media-amazon.com/images/I/71rYxtbE8SS._AC_UL480_QL65_.jpg",
          name : "BATA Mens Boss-Grip Uniform Dress Shoe",
          category: "Formal Shoes",
          price: 1240,
          rating: "★★★★☆"
           },

           

    ]);
  
    const [Cart , setCart]= useState ([]);
    const [navi, setNavi]= useState ("true");
    const [iflast, setiflast]= useState ("false");

   const  AddToCart = (val)=> {

    
     setCart ([...Cart, {...val, quantity:1}])
   }

   const removeCart=(i)=>{
    const updatedList = Cart.filter((elem, id)=>{
    
    
    return i!=id;
    
    })

    setCart (updatedList)

}

     const CheckoutHandle =()=> {
     
        setiflast ("false")


     }

   const handle1 =()=> {
    setNavi ("true");
    setiflast ("true")
   }
   const handle2 =()=> {
   setNavi("false")
   setiflast ("true")
   }



return (  <div  >
       
       <HeaderPage handle1={handle1} 
     handle2={handle2} Cart={Cart.length} ></HeaderPage>
    <div>
    { iflast == "true" ?   navi == "true" ? <ProductList product={product} 
  AddToCart={AddToCart} Cart = {Cart}  ></ProductList> :
  <CartPage   Cart={Cart} removeCart={removeCart} 
  CheckoutHandle={CheckoutHandle} ></CartPage>  :
    <CheckOut Cart={Cart}  ></CheckOut> } 



     </div>
  
        </div>

      ) }
    export default Econnector;