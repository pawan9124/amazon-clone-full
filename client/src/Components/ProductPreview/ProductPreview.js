import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { withRouter } from "react-router-dom";
import axios from "../../axios";
import { useStateValue } from "../../StateProvider";
import "./ProductPreview.css";

function ProductPreview(props) {
  const [changeImage, setChangeImage] = useState("");
  const [product, setProduct] = useState({});
  //Use of context api
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket", basket);
  const addToBasket = () => {
    console.log("CLICKEd");
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product?.image[0]?.src,
        price: product.price,
        rating: product.rating,
      },
    });
  };

  useEffect(async () => {
    console.log("props.match.params.id", props.match.params.id);
    try {
      const response = await axios.get("/products/getSingleProduct", {
        params: { id: props.match.params.id },
      });
      console.log("response", response);
      if (response.data === null) {
        props.history.push("/");
      }
      setProduct(response.data);
      setChangeImage(response.data.image[0].src);
    } catch (erorr) {
      console.log("error", erorr);
      props.history.push("/error");
    }
  }, [props.match.params.id]);
  const handleImageChange = (e) => {
    setChangeImage(e.target.src);
  };
  return (
    <div className="productPreview">
      {/* Image Previews */}
      <div className="productPreview_imagePreview">
        <ul className="productPreview_image_thumbnail">
          {product?.image?.length > 0 &&
            product.image.map((mp, index) => (
              <li key={"images" + index}>
                <img onClick={handleImageChange} src={mp.src} alt="image" />
              </li>
            ))}
        </ul>
      </div>
      {/* Large Image */}
      <div className="productPreview_largeImage">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              // isFluidWidth: true,
              src: changeImage,
              width: 500,
              height: 500,
            },
            largeImage: {
              src: changeImage,
              width: 1000,
              height: 1200,
            },
          }}
        />
        {/* <img src="" alt="largeImage" /> */}
      </div>
      {/* Product details and add basket button */}
      <div className="productPreview__details">
        <h3>{product.title}</h3>
        <p className="productPreview__price">
          Price: <span className="price">$ {product.price}</span>
        </p>
        <p>
          {" "}
          Rating:
          <span className="gold">
            {Array(product.rating)
              .fill()
              .map((x) => "🌟")}
          </span>
        </p>
        <p>
          Store: <span className="text">{product.storeName}</span>
        </p>
        <p>
          Seller:<span className="text">{product.seller}</span>
        </p>
        <div className="productPreview__addToBasket">
          <button onClick={addToBasket} type="button">
            Add to basket
          </button>
        </div>
        <div className="productPreview_offers">
          <table>
            <tr>
              <td>
                <span>💰 Save Extra</span> with 4 offer
              </td>
            </tr>
            <tr>
              <td>
                <span>Bank Offer (2):</span> 10% off with Credit Card, Credit
                EMI and Debit EMI transactionss
              </td>
            </tr>
            <tr>
              <td>
                <span>Cashback (2):</span> 5% back with{" "}
                <a href="#">Amazon Pay ICIC Bank </a> Creidt Card for
                Prime-members. % back for everybody
              </td>
            </tr>
            <tr>
              <td>
                <span>No Cost EMI:</span> Avail No Cost EMI on select cards for
                orders above $300
              </td>
            </tr>
            <tr>
              <td>
                <span>Partner Offers:</span> Get GST invoice and save up to 28%
                on business purchases.<a href="#">Sign up for free</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductPreview);
