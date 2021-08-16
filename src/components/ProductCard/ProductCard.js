import React, { useContext } from "react";
import Rating from "../Rating";
import "./ProductCard.css";
import CartContext from "../../Context/CartContext/CartContext";

// import formatCurrency from 'format-currency'

function ProductCart({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt="" className="productcard-image" />
      </div>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <div className="product-rating">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </div>
      <button className="product-card-btn" onClick={()=> addToCart(product) }>Add to Cart</button>
    </div>
  );
}

export default ProductCart;

// herre product is read from prop sent by home screen desctuctured !
