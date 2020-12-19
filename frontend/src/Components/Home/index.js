import React from "react";
import "./style.css";
import Product from "../Product/Product";

function index() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt="home_images"
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12232222"
          title="The Lean startup: How Constant Innovation Creates Radically Successful Bsinesses Paperback"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="123232222"
          title="Kenwood kMix Stand Mixer for Baking, Sylish Kitchen mixer with K-beater, Dough Hook and Whisk, 5 Litre  Glass Bowl"
          price={239.99}
          image="https://images-na.ssl-images-amazon.com/images/I/61ie0JOVmtL._AC_SX679_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="3435435345"
          title="Samsung LC49RGSUXEN LED Smart watch"
          price={199.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={3}
        />
        <Product
          id="342343225345"
          title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
          price={98.99}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          rating={5}
        />
        <Product
          id="234123233"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="12342"
          title="Samsung LC49GR9000MXTRR 65' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1598.99}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default index;