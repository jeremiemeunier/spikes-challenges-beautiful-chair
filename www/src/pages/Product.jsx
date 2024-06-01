import { Link } from "react-router-dom";

import SlideShow from "../components/Slideshow";

const Product = () => {
  return (
    <div className="product-view">
      <div className="product-infos">
        <Link to={"/shop/chair"}>
          <i className="icon teaui-icon-arrow-left"></i>
        </Link>
        <p className="ariane">
          <Link to={"/shop/chair"}>Chair</Link> / Meryl Lounge Chair
        </p>
        <div className="product-name">
          <h1>Meryl Lounge Chair</h1>
          <div className="details">
            <p className="price">$149.99</p>
            <div className="notation"></div>
          </div>
        </div>
        <p className="description">
          The gently curved lines accentuated by sewn details are kind to your
          body and pleasant to look at. Also, there’s a tilt and
          height-adjusting mechanism that’s built to outlast years of ups and
          downs.
        </p>

        <div className="shop">
          <div className="colors"></div>
          <div className="cart"></div>
          <p>Free 3-5 day shipping • Tool-free assembly • 30-day trial</p>
        </div>
      </div>
      <div>
        <SlideShow
          data={[
            {
              media: {
                thumbnail: "img/Rectangle_2.png",
                original: "img/Rectangle_2.png",
              },
            },
            {
              media: {
                thumbnail: "img/Rectangle_3.png",
                original: "img/Rectangle_3.png",
              },
            },
            {
              media: {
                thumbnail: "img/Rectangle_4.png",
                original: "img/Rectangle_4.png",
              },
            },
            {
              media: {
                thumbnail: "img/Rectangle_5.png",
                original: "img/Rectangle_5.png",
              },
            },
            {
              media: {
                thumbnail: "img/Rectangle_6.png",
                original: "img/Rectangle_6.png",
              },
            },
            {
              media: {
                thumbnail:
                  "img/langfjaell-office-chair-with-armrests-gunnared-beige-black__0461403_PE607530_S5 1.png",
                original:
                  "img/langfjaell-office-chair-with-armrests-gunnared-beige-black__0461403_PE607530_S5 1.png",
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Product;
