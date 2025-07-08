import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="left-footer">
        <div className="logo">Logo</div>
        <div className="trademark">© 2025</div>
      </div>
    {/* <div className="categories"> */}
      <div className="men-section footer-section">
        <div className="footer-title">Men</div>
        <ul>
          <li><a href="#tshirts">T-shirts</a></li>
          <li><a href="#formalshirts">Formal Shirts</a></li>
          <li><a href="#jackets">Jackets</a></li>
          <li><a href="#jeans">Jeans</a></li>
          <li><a href="#trousers">Trousers</a></li>
        </ul>
      </div>
      <div className="women-section footer-section">
        <div className="footer-title">Women</div>
        <ul>
          <li><a href="#kurtas">Kurtas</a></li>
          <li><a href="#ethicwear">Ethnic Wear</a></li>
          <li><a href="#jeans">Jeans</a></li>
          <li><a href="#tshirts">T-shirts</a></li>
          <li><a href="#tops">Tops</a></li>
        </ul>

      </div>
      <div className="kids-section footer-section">
        <div className="footer-title">Kids</div>
        <ul>
          <li><a href="#tshirts">T-shirts</a></li>
          <li><a href="#dresses">Dresses</a></li>
          <li><a href="#shorts">Shorts</a></li>
          <li><a href="#jeans">Jeans</a></li>
          <li><a href="#nightware">Nightware</a></li>
        </ul>

      </div>
    {/* </div> */}
    </footer>
  )
}

export default Footer;
