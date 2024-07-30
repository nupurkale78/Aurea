"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState, useEffect } from "react";

const PaymentPage = ({ cart }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [currentSection, setCurrentSection] = useState(1);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState({
    name: "",
    street: "",
    landmark: "",
    city: "",
  });
  useEffect(() => {
    console.log(cart); // Debugging: Log cart to console
  }, [cart]);

  const [isEditingAddress, setIsEditingAddress] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/products?populate=*`,
          {
            headers: {
              Authorization: `Bearer c1c848e9f53cf4c3584cd58ebd926f296d8fab3b2fa0c3d8920cee6402c50a7671a599b759f85330b9b0b5d3dee9466b7cd41f52852ef402ca6dc616209d1e475e213120d4bcbe13b7fcabe7490afdb9355373825b588966bf9a462ae67b1cda8e20acbc1d26c73aeacdb5c6c674b6b39fa334b3a77a2e2cc78a42ac899a9c8c`,
            },
          }
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          setProductData(data.data[0]);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleSectionChange = (section) => {
    if (currentSection >= section) {
      setCurrentSection(section);
    }
  };

  const handleAddressChange = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const saveAddress = () => {
    setIsEditingAddress(false);
    setCurrentSection(2); // Move to the next section after saving address
  };
  const handleCheckout = () => {
    // Placeholder for checkout logic
    alert("Proceeding to checkout with cart: " + JSON.stringify(cart));
  };
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto min-h-screen">
          <div className="flex flex-col lg:flex-row justify-between w-full">
            {/* Delivery Address Section */}
            <div className="lg:w-2/3 md:w-full mb-6 lg:mb-0">
              <div className="bg-white shadow rounded p-6 mb-4">
                <h2
                  className="text-xl font-semibold mb-4 flex items-center cursor-pointer"
                  onClick={() => handleSectionChange(1)}
                >
                  <span
                    className={`${
                      currentSection === 1 ? "text-red-500" : "text-gray-900"
                    }`}
                  >
                    1. Delivery Address
                  </span>
                </h2>
                {currentSection === 1 && (
                  <>
                    {isEditingAddress ? (
                      <div className="ml-4 text-gray-700 text-sm">
                        <input
                          type="text"
                          value={address.name}
                          onChange={(e) =>
                            setAddress({ ...address, name: e.target.value })
                          }
                          placeholder="Name"
                          className="w-full mb-2 p-2 border rounded"
                        />
                        <input
                          type="text"
                          value={address.street}
                          onChange={(e) =>
                            setAddress({ ...address, street: e.target.value })
                          }
                          placeholder="Street"
                          className="w-full mb-2 p-2 border rounded"
                        />
                        <input
                          type="text"
                          value={address.landmark}
                          onChange={(e) =>
                            setAddress({ ...address, landmark: e.target.value })
                          }
                          placeholder="Landmark"
                          className="w-full mb-2 p-2 border rounded"
                        />
                        <input
                          type="text"
                          value={address.city}
                          onChange={(e) =>
                            setAddress({ ...address, city: e.target.value })
                          }
                          placeholder="City"
                          className="w-full mb-2 p-2 border rounded"
                        />
                        <button
                          onClick={saveAddress}
                          className="ml-auto bg-red-500 text-white py-1 px-3 rounded"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="ml-4 text-gray-700 text-sm">
                        <p>{address.name}</p>
                        <p>{address.street}</p>
                        <p>{address.landmark}</p>
                        <p>{address.city}</p>
                        <button
                          onClick={handleAddressChange}
                          className="ml-auto bg-red-500 text-white py-1 px-3 rounded"
                        >
                          Change
                        </button>
                      </div>
                    )}
                    <a href="#" className="text-blue-500 ml-4 block mt-2">
                      Add delivery instructions
                    </a>
                  </>
                )}
              </div>

              {/* Payment Method Section */}
              <div className="bg-white shadow rounded p-6 mb-4">
                <h2
                  className="text-xl font-semibold mb-4 cursor-pointer"
                  onClick={() => handleSectionChange(2)}
                >
                  <span
                    className={`${
                      currentSection === 2 ? "text-red-500" : "text-gray-900"
                    }`}
                  >
                    2. Select a Payment Method
                  </span>
                </h2>
                {currentSection === 2 && (
                  <div className="border border-gray-300 p-4 rounded mb-4">
                    <p className="font-medium text-lg text-gray-900 mb-2">
                      Your available balance
                    </p>
                    <div className="flex items-center mb-4">
                      <input
                        type="text"
                        placeholder="Enter Code"
                        className="rounded border appearance-none border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base"
                      />
                      <button className="ml-2 bg-gray-300 text-gray-800 py-2 px-4 rounded">
                        Apply
                      </button>
                    </div>
                    <p className="text-gray-600 mb-4 text-base">
                      Another payment method
                    </p>

                    <div className="mb-4">
                      <input
                        type="radio"
                        id="credit-card"
                        name="payment-method"
                        value="credit-card"
                        className="mr-2 h-4 w-4"
                        onChange={handlePaymentMethodChange}
                      />
                      <label
                        htmlFor="credit-card"
                        className="text-lg text-gray-700"
                      >
                        Credit or debit card
                      </label>
                      <div className="mt-2 flex items-center space-x-2">
                        <img src="visalogo.jpg" alt="Visa" className="h-6" />
                        <img
                          src="MasterCard_logo.webp"
                          alt="MasterCard"
                          className="h-6"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <input
                        type="radio"
                        id="net-banking"
                        name="payment-method"
                        value="net-banking"
                        className="mr-2 h-4 w-4"
                        onChange={handlePaymentMethodChange}
                      />
                      <label
                        htmlFor="net-banking"
                        className="text-lg text-gray-700"
                      >
                        Net Banking
                      </label>
                      <select className="ml-2 bg-white border border-gray-300 rounded px-2 py-1 text-gray-700">
                        <option>Choose a bank</option>
                        <option>Bank of Baroda</option>
                        <option>Kotak Bank</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <input
                        type="radio"
                        id="upi"
                        name="payment-method"
                        value="upi"
                        className="mr-2 h-4 w-4"
                        onChange={handlePaymentMethodChange}
                      />
                      <label htmlFor="upi" className="text-lg text-gray-700">
                        Other UPI Apps
                      </label>
                      {selectedPaymentMethod === "upi" && (
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Enter your UPI ID"
                            className="rounded border appearance-none border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base"
                          />
                          <button className="ml-2 bg-gray-300 text-gray-800 py-2 px-4 rounded">
                            Verify
                          </button>
                        </div>
                      )}
                      <div className="mb-4">
                        <input
                          type="radio"
                          id="cod"
                          name="payment-method"
                          value="cod"
                          className="mr-2 h-4 w-4 pt-12"
                          onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="cod" className="text-lg text-gray-700">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:w-1/3 md:w-full mb-6 lg:mb-0">
              <div className="bg-white shadow rounded p-6">
                <h2
                  className="text-xl font-semibold mb-4 cursor-pointer"
                  onClick={() => handleSectionChange(3)}
                >
                  <span
                    className={`${
                      currentSection === 3 ? "text-red-500" : "text-gray-900"
                    }`}
                  >
                    3. Order Summary
                  </span>
                </h2>
                {loading ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div>Error: {error}</div>
                ) : (
                  <div>
                    <div className="flex items-center mb-4">
                      <ul>
                        {Array.isArray(cart) && cart.length > 0 ? (
                          cart.map((item, index) => (
                            <li key={index}>
                              {item[0]} with a price of {item[1]}
                            </li>
                          ))
                        ) : (
                          <p>No items in cart</p>
                        )}
                      </ul>
                      {productData && productData.attributes && (
                        <img
                          src={`http://localhost:1337${productData.attributes.image.data.attributes.formats.small.url}`}
                          alt="Product"
                          className="mr-4 w-24 h-24 object-cover"
                        />
                      )}
                      {productData && productData.attributes && (
                        <div>
                          <h3 className="text-lg font-medium">
                            {productData.attributes.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Sold by: Amazon Asia-Pacific Holdings Private
                            Limited
                          </p>
                        </div>
                      )}
                    </div>
                    {productData && productData.attributes && (
                      <div className="mb-4">
                        <p className="text-lg font-bold text-black">
                          Item price:{" "}
                          <span className="text-lg text-gray-900">
                            ₹{productData.attributes.price}
                          </span>
                        </p>
                        <p className="text-2xl font-semibold text-red-600">
                          ₹{productData.attributes.price}
                        </p>
                      </div>
                    )}
                    <button
                      className="w-full bg-yellow-100 text-gray-700 py-2 px-4 rounded-full text-sm font-medium border border-yellow-300 hover:bg-yellow-200 focus:outline-none"
                      onClick={handleCheckout}
                    >
                      Place your order
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PaymentPage;
