import { useEffect, useState } from "react";

import './Ecom.css'


const CartPage = ({Cart,removeCart, CheckoutHandle})=> {

    const [CartIn , setCartInc] = useState ([3]);
        
    useEffect (()=>{


        setCartInc(Cart)

    }, [Cart])

    return (
   <div >

    <div  >
   <br></br>    
     <div className="total-continue"> <div className="div-Cart-chk-plz"  >  
                     {  Cart.length> "0" ? 
                      <div>     
                        
                       <div className="total-continue"  > Total  {
                        CartIn.map(item=> item.price *item.quantity).reduce((total, value)=> total+value,0)
                        } </div>
                        
                          <button  className="Check-out-btn" onClick={CheckoutHandle}>CheckOut</button>  </div> :
                      <div  className="Plz-C-Shop"> Cart is empty </div> }  </div>
                          </div> 
                
   <div className="Cart-page-div"  >  
   
   { 
        CartIn.map((ele, eleindex)=> {
            
           return (     
     
            <div>
           <div className="cart-name-img"> <p className="Product-cart-name">{ele.name}</p>
            <img className="img-cart-bage" src={ele.url} width="10%"></img> </div>


            <div>  <button className="Plus-btn" onClick={()=>{const CartInn = CartIn.map((item,index)=>{

return  eleindex  === index ? 

{...item, quantity: item.quantity+1 }:item 

})
setCartInc (CartInn)

}}  >+</button>   <div className="Qnty-Cart"> <span>{ele.quantity}</span> </div>  


<button className="Min-btn" onClick={()=>{const CartInn =CartIn.map((item,index)=>{

    return  eleindex  === index ? {...item, quantity: item.quantity>1? item.quantity-1 :1 }:item 

})
setCartInc (CartInn)  }}  >-</button > 
               
                </div> 


                
   
                      
    <div className="Cart-price"> Rs:-{ele.price} </div>
    <div className="Cart-btn-div"> <button className="remove-btn"
                         onClick={()=>removeCart(eleindex)} 
                        >Remove</button> </div>
                        
                         </div> 
                     
           ) } ) }  
      
         
      
    </div>
    </div>
   
    </div>
   
    ) }

    export default CartPage;