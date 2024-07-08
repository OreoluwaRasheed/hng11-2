import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/cart.svg";
import bars from "../assets/images/bars.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navRef = useRef();
  const cartRef = useRef();
  const hamburgerRef = useRef();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Timbu Cloud Shop" />
        </Link>
      </div>
      <nav
        ref={navRef}
        className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}
      >
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          Products
        </Link>
        <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
          Cart
        </Link>
      </nav>
      <div className="cart-container" ref={cartRef}>
        <div className="cart-icon" onClick={toggleCart}>
          <img src={cart} alt="Timbu Cart" />
        </div>
        {isCartOpen && (
          <div className="cart-dropdown">
            No items have been added to the cart
          </div>
        )}
      </div>
      <div className="hamburger" onClick={toggleMobileMenu} ref={hamburgerRef}>
        <img src={bars} alt="Timbu Menu" />
      </div>
    </header>
  );
};

export default Header;
