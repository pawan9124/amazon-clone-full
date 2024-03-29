import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title.length > 100 ? title.slice(0, 100) + "..." : title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i + "rate"} className="product__star_gold">
                🌟
              </p>
            ))}
        </div>
      </div>
      <Link to={`/product_preview/${id}`}>
        <img src={image} alt="Amazon_src" />
      </Link>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
