import React, { useEffect, useState } from "react";
import "./style.css";
import Product from "../Product/Product";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import FourImageCards from "../Cards/FourImageCards";
import AdDisplayCard from "../Cards/AdDisplayCard";
import { Link } from "react-router-dom";

const fourCardData = {
  firstCard: {
    title: "Amazon Brands & more",
    data: [
      {
        link:
          "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/1._SY116_CB413570652_.jpg",
        title: "Clothes",
      },
      {
        link:
          "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/2._SY116_CB413570652_.jpg",
        title: "Footwear",
      },
      ,
      {
        link:
          "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg",
        title: "Clothing Essentials",
      },
      ,
      {
        link:
          "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg",
        title: "Daily Essentials",
      },
    ],
  },
  secondCard: {
    title: "Shop by Category",
    data: [
      {
        link:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg",
        title: "Video Games",
      },
      {
        link:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg",
        title: "Computer & Accessories",
      },
      ,
      {
        link:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg",
        title: "Baby",
      },
      ,
      {
        link:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg",
        title: "Toys & Games",
      },
    ],
  },
  thirdCard: {
    title: "Up to 30% off | Top mobiles ",
    data: [
      {
        link:
          "https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_2._SY116_CB416674425_.jpg",
        title: "Best Seller",
      },
      {
        link:
          "https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_3._SY116_CB416674425_.jpg",
        title: "Top Rated",
      },
      ,
      {
        link:
          "https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_4._SY116_CB416674425_.jpg",
        title: "Great Offers",
      },
      ,
      {
        link:
          "https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_5._SY116_CB416674552_.jpg",
        title: "Accessories",
      },
    ],
  },
};
const adDisplayData = {
  firstCard: {
    type: "text",
    className: "addisplay__Card_text",
    title: "Shop on the amazon app",
    text: "Fast, convenient and secure | Over 17 crore products in your pocket",
    link: "Download the amazon app",
  },
  secondCard: {
    type: "image",
    className: "addisplay__Card_image",
    image:
      "https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg",
  },
};

function Home(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products/getAllProducts")
      .then((response) => {
        console.log(
          "HEADER &&&$$$$ IS THE RESPONSE------------------------------------------->",
          response
        );
        if (response.data) {
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        <Carousel />
        {/* <img
          alt="home_images"
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        /> */}
      </div>
      <div className="home__row">
        <FourImageCards {...fourCardData.firstCard} />
        <FourImageCards {...fourCardData.secondCard} />
        <FourImageCards {...fourCardData.thirdCard} />
        <div className="ad_displayCard">
          <AdDisplayCard {...adDisplayData.firstCard} />
          <AdDisplayCard {...adDisplayData.secondCard} />
        </div>
      </div>
      <div className="home__row home_banner">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          className=""
        ></img>
      </div>
      <div className="home__row home__products_detail">
        {products.length > 0 &&
          products.map((product) => (
            <Product
              key={product._id}
              id={product._id}
              title={product.title}
              price={product.price}
              image={product.image[0].src}
              rating={product.rating}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
