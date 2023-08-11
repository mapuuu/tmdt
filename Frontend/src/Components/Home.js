import React, { useEffect, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import axios from 'axios';
import Product from './Product';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(`http://localhost:4000/v4/product/getAllProducts`);
      console.log(response.data)
      setProducts(response.data.products);
      setTotalPages(response.data.pages);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };



  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full">
      <div className="w-5/6 mx-auto mt-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Best seller</p>
          <Link to={'/shopping'}>
            <div className="flex items-center">

              <p className="font-semibold">More</p>
              <BiChevronRight />
            </div>
          </Link>

        </div>
        <div className="flex justify-between mt-4">
          {/* Pass the products array to the Product component */}
          <Product products={products} />
        </div>
      </div>
      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
};

export default Home;
