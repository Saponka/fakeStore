import React from "react";
//import Nike from "../../assets/images/Nike.jpg";
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
          <img src="" alt="logo" width="150" />
        </div>
      </a>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
      </ul>
        {/* <Link to="/carrito"> */}
       <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0 {/* {quantity} */}</span>
      </div>
      {/* </Link> */}
    </header>
  );
};

export default Header;