import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import axios from "axios";

// Function to fetch data from the Strapi endpoint
export const getData = async () => {
  const token =
    "c1c848e9f53cf4c3584cd58ebd926f296d8fab3b2fa0c3d8920cee6402c50a7671a599b759f85330b9b0b5d3dee9466b7cd41f52852ef402ca6dc616209d1e475e213120d4bcbe13b7fcabe7490afdb9355373825b588966bf9a462ae67b1cda8e20acbc1d26c73aeacdb5c6c674b6b39fa334b3a77a2e2cc78a42ac899a9c8c";
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(
      "http://localhost:1337/api/products?populate=*",
      { headers }
    );
    const data = response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw new Error("Failed to fetch products data");
  }
};

// Page component for displaying products
const Page = async () => {
  let initialProducts = [];
  try {
    initialProducts = await getData();
  } catch (error) {
    return (
      <div>
        <Header />
        <p>Error loading products.</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Products initialProducts={initialProducts} />
      <Footer />
    </div>
  );
};

export default Page;
