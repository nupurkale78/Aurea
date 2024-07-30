"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Products = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialProducts.length) {
      setIsLoading(true);
      fetch("http://localhost:1337/api/products?populate=*")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.data); // Assuming your products are in data.data array
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [initialProducts]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;
  if (!products || products.length === 0) return <p>No products found.</p>;

  return (
    <div className="container mx-auto px-7">
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Elevate Your Lifestyle.
              </h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  {product.attributes.image &&
                    product.attributes.image.data && (
                      <img
                        className="h-96 rounded m-auto mb-8"
                        src={
                          "http://localhost:1337" +
                          product.attributes.image.data.attributes.formats.small
                            .url
                        }
                        alt={product.attributes.title || "Product Image"}
                      />
                    )}
                  <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                    {product.attributes.category || "Uncategorized"}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {product.attributes.title || "Untitled Product"}
                  </h2>
                  <button
                    className={
                      "border-2 border-gray-300 ml-1  rounded-full w-6 h-6 focus:outline-none "
                    }
                    style={{ background: product.attributes.color }}
                  ></button>
                  <p className="leading-relaxed text-base">
                    {product.attributes.description ||
                      "No description available"}
                  </p>
                  <Link href={`/product/${product.attributes.slug}`}>
                    <button className=" my-2 ml-auto text-white bg-red-500 border-0 mt-2 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-red-600 rounded">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
