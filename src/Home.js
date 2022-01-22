import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

          <div className="home__row">
            <Product
              id="0"
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={5}
            />
            <Product
              id="49538094"
              title="Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel"
              price={447.97}
              rating={4}
              image="https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UY436_FMwebp_QL65_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="All-new Echo Dot (4th generation) International Version | Smart speaker with Alexa | Charcoal"
              price={49.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_Dash_EchoDot_Jan21_2x._SY608_CB413050328_.jpg"
            />
            <Product
              id="23445930"
              title="5 Yards 100% White Cotton Muslin Fabric Material, Soft Embroidery Quilting Sewing Material Apparel Cloth"
              price={31.99}
              rating={3}
              image="https://m.media-amazon.com/images/I/61UXnLbu6fL._AC_UL640_FMwebp_QL65_.jpg"
            />
            <Product
              id="3254354345"
              title="Sister Gifts from Sister - Sterling Silver Interlocking Infinity 2 Circles Necklace for Sisters"
              price={23.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/610YVuxHO1L._AC_UL640_FMwebp_QL65_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
              price={1395.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/61oVYpKCOIL._AC_UY436_FMwebp_QL65_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
