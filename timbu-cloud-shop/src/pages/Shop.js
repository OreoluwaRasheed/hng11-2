import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Shop.css";

const products = [
  {
    id: 1,
    title: "Goat Meat Stew",
    price: "30",
    description: "Stew Comes with 10 meats.",
    image: "/assets/images/products/1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    title: "Jollof Rice and Chicken",
    price: "10",
    description: "This Comes with Package.",
    image: "/assets/images/products/2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    title: "Jollof Rice and Meat",
    price: "20",
    description: "Comes with 6 Pieces of Meat.",
    image: "/assets/images/products/3.jpg",
    quantity: 1,
  },
  {
    id: 4,
    title: "Egusi Soup and Garri",
    price: "10",
    description: "Body text.",
    image: "/assets/images/products/4.jpg",
    quantity: 1,
  },
  {
    id: 5,
    title: "Indomie noodles With Egg",
    price: "8",
    description: "Comes With 2 Eggs.",
    image: "/assets/images/products/5.jpg",
    quantity: 1,
  },
  {
    id: 6,
    title: "Porridge Yam and Meat",
    price: "5",
    description: "Comes with 4 Pieces of Meat.",
    image: "/assets/images/products/6.jpg",
    quantity: 1,
  },
  {
    id: 7,
    title: "Original Indian Salad",
    price: "5",
    description: "Comes With water.",
    image: "/assets/images/products/7.jpg",
    quantity: 1,
  },
  {
    id: 8,
    title: "Fresh Fruit Salad",
    price: "5",
    description: "Comes With 2 Eggs.",
    image: "/assets/images/products/8.jpg",
    quantity: 1,
  },
  {
    id: 9,
    title: "Green Salad",
    price: "10",
    description: "Comes With Water.",
    image: "/assets/images/products/9.jpg",
    quantity: 1,
  },
  {
    id: 10,
    title: "Nigeran Pizza With nuts",
    price: "10",
    description: "Body text.",
    image: "/assets/images/products/10.jpg",
    quantity: 1,
  },
  {
    id: 11,
    title: "Full Chicken",
    price: "20",
    description: "Comes With Chips.",
    image: "/assets/images/products/11.jpg",
    quantity: 1,
  },
  {
    id: 12,
    title: "Beef Shawarma",
    price: "5",
    description: "Comes with Extra Chicken.",
    image: "/assets/images/products/12.jpg",
    quantity: 1,
  },
];

const slides = [
  { id: 1, image: "/assets/images/slide1.jpg" },
  { id: 2, image: "/assets/images/slide2.jpg" },
  { id: 3, image: "/assets/images/slide3.jpg" },
];

const Shop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cartLoading, setCartLoading] = useState(
    Array(products.length).fill(false)
  );
  const [searchTerm, setSearchTerm] = useState("");
  const slideRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(slideInterval);
    }
  }, [isPaused]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
  };

  const handleAddToCart = (index) => {
    const newCartLoading = [...cartLoading];
    newCartLoading[index] = true;
    setCartLoading(newCartLoading);

    setTimeout(() => {
      newCartLoading[index] = false;
      setCartLoading(newCartLoading);
      toast.success(`${products[index].title} added to cart!`);
    }, 1000);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDragStart = (e) => {
    e.preventDefault();
    slideRef.current.startX = e.clientX;
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    const distance = e.clientX - slideRef.current.startX;
    if (distance > 50) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    } else if (distance < -50) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    setIsPaused(true);
  };

  return (
    <div className="shop">
      {/* Carousel Slider */}
      <div
        className="carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        ref={slideRef}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt="Timbu Cloud Slide" />
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      {/* Search Bar */}
      <h3 className="section-title">Our Products</h3>
      <div className="search-bar">
        <FaSearch />
        <input
          type="text"
          placeholder="What are you Craving?"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <div className="no-products">No products found</div>
        ) : (
          filteredProducts.map((product, index) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3 className="title">{product.title}</h3>
              <p className="price">${product.price}</p>
              <p className="description">{product.description}</p>
              <button onClick={() => handleAddToCart(index)}>
                {cartLoading[index] ? (
                  <FaSpinner className="spinner" />
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          ))
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Shop;
