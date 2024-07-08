import React, { useState } from "react";
import "./Checkout.css";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import payout from "../assets/images/payout.svg";
import paystack from "../assets/images/paystack.svg";
import flutterwave from "../assets/images/flutterwave.svg";
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

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = 10;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-left">
        <h1 className="cart-title">Shipping Address</h1>

        <button className="add-address">
          <span className="add-icon">
            <FaPlus />
          </span>
          Add Shipping Address
        </button>
        <div>
          <h5 className="items-title">Payment Method</h5>
          <p className="payment-subtitle">Select preferred payment method</p>
          <div>
            <div className="payment-method">
              <span>
                <img src={paystack} />
                <label htmlFor="cod">Paystack</label>
              </span>
              <input type="radio" name="payment" id="paystack" />
            </div>
            <div className="payment-method">
              <span>
                <img src={flutterwave} />
                <label htmlFor="paypal">Flutterwave</label>
              </span>
              <input type="radio" name="payment" id="flutterwave" />
            </div>
          </div>
        </div>
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
                <span>{item.quantity} Unit</span>
              </div>
            </div>
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
        <button className="checkout-button" onClick={() => navigate("/")}>
          Pay
        </button>
        <img src={payout} />
      </div>
    </div>
  );
};

export default Checkout;
