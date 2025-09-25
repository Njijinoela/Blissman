import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [phone, setPhone] = useState("");

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === "mpesa" && !phone) {
      alert("Please enter your M-Pesa phone number before placing order.");
      return;
    }

    alert("✅ Your order has been placed successfully!");

    navigate("/products");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Your Order</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b pb-2 text-sm"
              >
                <span>{item.name}</span>
                <span className="font-medium text-blue-600">
                  {formatPrice(item.price)}
                </span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 font-bold">
          Total: {formatPrice(cart.reduce((sum, item) => sum + item.price, 0))}
        </p>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Payment Method
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="mpesa">M-Pesa</option>
            <option value="card">Credit/Debit Card</option>
            <option value="cash">Cash on Delivery</option>
          </select>
        </div>

        {/* Only show phone input if Mpesa */}
        {paymentMethod === "mpesa" && (
          <div>
            <label className="block text-sm font-medium mb-1">
              M-Pesa Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07XX XXX XXX"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
