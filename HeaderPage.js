import { useState } from "react";
import './Ecom.css';

const HeaderPage = ({Cart , handle1,handle2})=> {

  

    return (


  <div className="productPage" >
    
   <div onClick={handle1} >HOME</div> 
   <div onClick={handle2} > 👜 CART <sup>{Cart}</sup></div>
     </div>


    ) }
    export default HeaderPage;