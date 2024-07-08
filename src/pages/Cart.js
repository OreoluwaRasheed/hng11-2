import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import payout from "../assets/images/payout.svg";

const initialCartItems = [
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
];

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.min(10, Math.max(1, item.quantity + delta)),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const quantityTotal = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const deliveryFee = 10;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-left">
        <h1 className="cart-title">Shopping Cart ({quantityTotal})</h1>
        <h5 className="items-title">Items</h5>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item.id, -1)}>
                  <FaMinus />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <button
              className="cart-item-remove"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-right">
        <h2>Summary</h2>
        <p>
          <span>Subtotal:</span> <span>$ {subtotal}</span>
        </p>
        <p>
          <span>Delivery Fee:</span> <span>$ {deliveryFee}</span>
        </p>
        <hr />
        <p>
          <span>Total:</span> <span>$ {total}</span>
        </p>
        <button
          className="checkout-button"
          onClick={() => navigate("/checkout")}
        >
          Proceed To Checkout ({quantityTotal})
        </button>
        <img src={payout} />
      </div>
    </div>
  );
};

export default Cart;
