"use client";
import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div>
        <section className="text-gray-600 body-font container mx-auto px-4 sm:px-7">
          <div className="container px-5 py-12 sm:py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10 sm:mb-20">
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <img
                  src="bg.jpg"
                  alt="E-commerce website"
                  className="  mb-4 sm:mb-0 mr-0 sm:mr-10 object-cover w-90 h-80 sm:w-64  sm:h-48"
                />
                <div className="text-left sm:text-left">
                  <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
                    EXCLUSIVE COLLECTION
                  </h2>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Your One-Stop Online Shop
                  </h1>
                  <p className="lg:w-full leading-relaxed text-base">
                    Explore a vast selection of products at unbeatable prices.
                    From the latest electronics to fashion trends, home
                    essentials, and much more, we have everything you need all
                    in one place. Shop now and experience the best of online
                    shopping.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:w-1/2 w-full px-4 sm:px-8 py-6 border-l-0 sm:border-l-2 border-t-2 sm:border-t-0 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Trending Now
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Discover the hottest products of the season. From tech gadgets
                  to fashion must-haves, stay ahead of the trends with our top
                  picks.
                </p>
                <a className="text-red-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:w-1/2 w-full px-4 sm:px-8 py-6 border-l-0 sm:border-l-2 border-t-2 sm:border-t-0 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  New Arrivals
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Be the first to shop our latest additions. Our new arrivals
                  section features the newest products in every category,
                  handpicked just for you.
                </p>
                <a className="text-red-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:w-1/2 w-full px-4 sm:px-8 py-6 border-l-0 sm:border-l-2 border-t-2 sm:border-t-0 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Best Sellers
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Browse our best-selling products that customers love. From
                  household essentials to the latest gadgets, find out what's
                  popular right now.
                </p>
                <a className="text-red-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full sm:w-1/2 w-full px-4 sm:px-8 py-6 border-l-0 sm:border-l-2 border-t-2 sm:border-t-0 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Exclusive Offers
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Don't miss out on our exclusive deals and discounts. Save big
                  on your favorite items and enjoy great value on a wide range
                  of products.
                </p>
                <a className="text-red-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <Link href="/Products">
              <button className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded-2xl text-lg">
                Shop Now
              </button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default page;
