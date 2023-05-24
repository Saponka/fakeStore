import React from "react";
import shop from "../../assets/images/ecommerce.svg";
//import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
import "./header.css"
const Header = () => {

  //const quantity = useSelector((state)=>state.numberCart)

  
  //console.log("numberCartHeader:",quantity);

  return (
    <header>
      <a href="/">
        <div className="logo">
          <img src={shop} alt="logo" width="80" />
        </div>
      </a>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Productos</a>
        </li>
      </ul>
        {/* <Link to="/carrito"> */}
        <a href="/cart">
       <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0 {/* {quantity} */}</span>
      </div>
      </a>
      {/* </Link> */}
    </header>
  );
};

export default Header;