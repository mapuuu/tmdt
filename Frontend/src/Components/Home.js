import React, { useEffect, useState } from 'react';
import Layout from '../Pages/Layout';
import { BiChevronRight } from "react-icons/bi";
import axios from 'axios';
import Product from './Product';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/v4/product/getAllProducts');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-5/6 mx-auto mt-8">
        <div className="flex justify-between items-center ">
          <p className="font-semibold">Recommended</p>
          <div className="flex items-center">
            <p className="font-semibold">More</p>
            <BiChevronRight />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          {/* Pass the products array to the Product component */}
          <Product products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
