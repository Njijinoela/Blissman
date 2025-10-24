import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import API_BASE_URL from "../config";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || !email) {
      alert("⚠️ Please fill in both phone number and email.");
      return;
    }

    if (!/^07\d{8}$/.test(phone)) {
      alert("⚠️ Enter a valid M-Pesa phone number (e.g., 07XX XXX XXX)");
      return;
    }

    const orderDetails = {
      phone,
      email,
      items: cart.map((item) => ({
        product_id: item.id,
        quantity: item.quantity || 1,
      })),
    };

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/orders/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("❌ Failed: " + errorData.error);
        return;
      }

      const data = await res.json();
      alert(`✅ Order #${data.order_id} placed! Total: KES ${data.total}`);
      navigate("/products");
    } catch (error) {
      console.error("Order error:", error);
      alert(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
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
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07XX XXX XXX"
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
