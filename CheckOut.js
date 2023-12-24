import { useEffect, useState } from "react";

import './Ecom.css'

const CheckOut = ({Cart,removeCart})=> {

  const [cartcheck, setcartcheck]= useState([3])
  
const [serverdata, setserverdata]=useState([])




useEffect (()=>{
    setcartcheck (Cart)

}, [Cart] )


const SubmitAllData=()=>{

    
    setserverdata (cartcheck)
   
  
}


console.log(serverdata);

    
return (


<div>


    

<div className="checkout-form">

       <label>Name:</label>
        <input type="text"  onChange={(e) => setserverdata(e.target.value)} />

        <label>Email:</label>
        <input type="email" onChange={(e) =>setserverdata(e.target.value)} />

        <label>Address:</label>
        <textarea  onChange={(e) => setserverdata(e.target.value)} />

        <button className="place-order" onClick={SubmitAllData}  >Place Order</button>
      </div>






</div>  



)}  

export default CheckOut;