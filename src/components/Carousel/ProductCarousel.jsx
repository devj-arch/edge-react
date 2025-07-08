import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "./products_carousel";
import "./ProductCarousel.css"; // For custom styles
import useFetch from "../../hooks/useFetch";
import CONFIG from "../../config";
import { useParams } from "react-router-dom";

const ProductCarousel = () => {
  // const {category} = useParams();

  // const {data = [], loading, error} = useFetch(`${CONFIG.BACKEND_URL}/carousel?category=${category}`);
  // console.log('data: ', data);

  // const {id, images} = data;
  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of products visible at once
    slidesToScroll: 1, // Number of products to scroll
    autoplay: true, // Auto-scroll
    autoplaySpeed: 3000, // Auto-scroll interval
    // responsive: [
    //   {
    //     breakpoint: 1024, // Adjust for smaller screens
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="carousel-container">
      <h2>Our Products</h2>
      <Slider {...settings}>
        {/* {images.map((image) => (
          <div key={id} className="product-card">
            <img src={image} alt='banner_img' />
          </div>
        ))} */}

        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt='banner_img' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
