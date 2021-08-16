import React from "react";
import products from "../../data";
import "./HomeScreen.css";
import ProductCard from "../../components/ProductCard/ProductCard";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {products.map((product) => (
          <ProductCard key={product.id} product={product} />
         
      ))}
    </div>
  );
}

export default HomeScreen;


// product={product} left habnd side product is prop created from child components 
// where as right side product is read through tmap function given by data.js