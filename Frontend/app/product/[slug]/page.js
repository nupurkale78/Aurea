"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";

const Page = ({}) => {
  const router = useRouter();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);
  const addToCart = (item, qty, price) => {
    let newCart = [...cart];
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price]);
    }
    setCart(newCart);
    setReloadKey(Math.random());
  };
  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`,
          {
            headers: {
              Authorization: `Bearer c1c848e9f53cf4c3584cd58ebd926f296d8fab3b2fa0c3d8920cee6402c50a7671a599b759f85330b9b0b5d3dee9466b7cd41f52852ef402ca6dc616209d1e475e213120d4bcbe13b7fcabe7490afdb9355373825b588966bf9a462ae67b1cda8e20acbc1d26c73aeacdb5c6c674b6b39fa334b3a77a2e2cc78a42ac899a9c8c`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        // Check if data.data is valid
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          setProduct(data.data[0]);
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
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header key={reloadKey} cart={cart} />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={product.attributes.title || "Product Image"}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={
                product.attributes.image &&
                product.attributes.image.data &&
                `http://localhost:1337${product.attributes.image.data.attributes.formats.small.url}`
              }
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Aurea
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.attributes.title || "Product Title"}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">
                {product.attributes.description || "No description available."}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {product.attributes.price
                    ? `₹${product.attributes.price}`
                    : "Price not available"}
                </span>
                <div className="flex mx-2">
                  <button
                    onClick={() => {
                      addToCart(slug, 1, product.attributes.price);
                    }}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-2 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      router.push("/CheckOut ");
                    }}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-2 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Buy Now
                  </button>
                </div>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
