import React from 'react'
import Hearder from '../components/header';
import Footer from '../components/footer';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useContext, useState, useReducer, useEffect } from 'react';
import { Store } from '../store';
import UserTest from '../components/sidebar';
import { AiFillCaretDown, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Product from '../components/product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Pagination from '../components/pagination';
import GetUrl from '../components/getUrl';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload.products, pages: action.payload.pages, page: action.payload.page, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Shopping = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [currentPage, setCurrentPage] = useState(queryParams.get('page') || 1);
    const [category, setCategory] = useState(queryParams.get('category') || '');

    const [price, setPrice] = useState(queryParams.get('price') || '');
    const [rating, setRating] = useState(queryParams.get('rating') || '');
    const [sort, setSort] = useState(queryParams.get('sort') || '');

    const [compare, setCompare] = useState("")

    //   const [hilightCategory, setHilightCategory] = useState(category);
    //   const [hilightPrice, setHilightPrice] = useState(price);
    //   const [hilightRating, setHilightRating] = useState(rating);
    //   const [hilightSort, setHilightSort] = useState(sort);

    //   const [valuePrice, setValuePrice] = useState("");



    //   console.log({category, price,rating,sort})
    // const queryParams = new URLSearchParams(location.search);
    // const {page : currentPage} = params;
    // const [currentPage, setCurrentPage] = useState(1);
    // const currentPage = queryParams.get('page') || 1;
    // const [totalPages, setTotalPages] = useState(1);
    //   console.log(currentPage)
    const [showCategory, setShowCategory] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([]);
    const [{ loading, error, products, pages, page }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            // const result = await axios.get('/api/products');
            // setProducts(result.data);
            dispatch({ type: 'FETCH_REQUEST' });
            try {

                const result = await axios.get(`/v4/product/getFilter?category=${category}&price=${price}&rating=${rating}&sort=${sort}&page=${currentPage}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: { pages: result.data.pages, products: result.data.products, page: result.data.page } });
                // setCurrentPage(1)
                // setTotalPages(result.data.pages)
                console.log(result)
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();

        const fetchCategories = async () => {
            try {
                const response = await axios.get('/v4/categories/getAllCategories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, [currentPage, category, price, rating, sort]);
    const handlePageChange = (newPage) => {
        localStorage.setItem('shoppingCurrentPage', newPage.toString());
        setCurrentPage(newPage);
        // console.log(newPage)
        // Scroll lên thẻ có id là "shopping" sau khi thay đổi trang
        const shoppingElement = document.getElementById('shopping');
        if (shoppingElement) {
            shoppingElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    // console.log(localStorage.getItem('shoppingCurrentPage'));
    // console.log(`${currentPage} + "đây là đầu trang"`)

    // console.log(categories);
    const getFilterUrl = (filter) => {
        // const filterPage = filter.page || page;
        const filterCategory = filter.category || category;

        const filterRating = filter.rating || rating;
        const filterPrice = filter.price || price;
        const sortOrder = filter.sort || sort;

        const queryParams = [];

        if (filterCategory !== '') {
            queryParams.push(`category=${filterCategory}`);
        }
        if (filterRating !== '') {
            queryParams.push(`rating=${filterRating}`);
        }
        if (filterPrice !== '') {
            queryParams.push(`price=${filterPrice}`);
        }
        if (sortOrder !== '') {
            queryParams.push(`sort=${sortOrder}`);
        }
        if (currentPage !== 1) {
            queryParams.push(`page=${currentPage}`);
        }
        return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    };
    const handleClick = (e) => {
        const result = e.target.getAttribute('value');
        setCompare(result)
        setPrice(result)
    };


    return (

        <div className='w-full mt-[200px] bg-[#F1F5F9]'>
            <Hearder />
            <div id='shopping' className='w-5/6 mx-auto py-[50px] grid grid-cols-5 gap-x-[20px]'>

                <div className="col-span-1  rounded overflow-hidden">
                    <div>
                        <div className='flex cursor-pointer items-center rounded-tl rounded-tr gap-x-[5px] bg-red-200 p-[5px]' onClick={() => setShowCategory(!showCategory)}>
                            {
                                showCategory ? (
                                    <AiFillCaretDown />
                                ) : (
                                    <AiFillCaretDown className='-rotate-90' />
                                )
                            }

                            <p className="text-2xl font-medium " >Thể loại</p>
                        </div>
                        {showCategory && (
                            <ul className=' flex items-center flex-col gap-y-[10px] p-[10px] bg-white'>
                                {
                                    categories.map((category) => (

                                        <li key={category._id} className={` text-xl cursor-pointer w-full rounded border flex justify-start p-[5px] bg-orange-100 `}>
                                            {category.title}
                                        </li>
                                    ))
                                }

                            </ul>
                        )}
                    </div>
                    <div className=''>
                        <div className='flex cursor-pointer items-center gap-x-[5px] bg-red-200 p-[5px]' onClick={() => setShowReview(!showReview)}>
                            {
                                showReview ? (
                                    <AiFillCaretDown />
                                ) : (
                                    <AiFillCaretDown className='-rotate-90' />
                                )
                            }

                            <p className="text-2xl font-medium" >Đánh giá</p>
                        </div>
                        {showReview && (
                            <ul className=' flex items-start flex-col gap-y-[10px] p-[10px] bg-white'>
                                <li className='text-xl cursor-pointer flex'>
                                    <AiFillStar className="text-yellow-300" />
                                    <AiOutlineStar className="text-yellow-300" />
                                    <AiOutlineStar className="text-yellow-300" />
                                    <AiOutlineStar className="text-yellow-300" />
                                    <AiOutlineStar className="text-yellow-300" />
                                </li>

                                <li className='text-xl cursor-pointer flex'>
                                    <AiFillStar className="text-yellow-300" />
                                    <AiFillStar className="text-yellow-300 " />
                                    <AiOutlineStar className="text-yellow-300" />
                                    <AiOutlineStar className="text-yellow-300" />
                                    <AiOutlineStar className="text-yellow-300" />
                                </li>

                                <li className='flex cursor-pointer text-xl '>
                                    <AiFillStar className="text-yellow-300" />
                                    <AiFillStar className="text-yellow-300" />
                                    <AiFillStar className="text-yellow-300" />
                                    <AiOutlineStar className="text-yellow-300" />
                                    <AiOutlineStar className="text-yellow-300" />
                                </li>

                                <li className='text-xl cursor-pointer flex'>
                                    <AiFillStar className="text-yellow-300" />
                                    <AiFillStar className="text-yellow-300" />
                                    <AiFillStar className="text-yellow-300" />
                                    <AiFillStar className="text-yellow-300" />
                                    <AiOutlineStar className="text-yellow-300" />
                                </li>

                                <li className='flex cursor-pointer text-xl '>
                                    <AiFillStar className="text-yellow-300 " />
                                    <AiFillStar className="text-yellow-300" />
                                    <AiFillStar className="text-yellow-300" />
                                    <AiFillStar className="text-yellow-300" />
                                    <AiFillStar className="text-yellow-300" />
                                </li>

                            </ul>
                        )}
                    </div>
                    <div className=''>
                        <div className='flex items-center gap-x-[5px] rounded-bl rounded-br cursor-pointer bg-red-200 p-[5px]' onClick={() => setShowPrice(!showPrice)}>
                            {
                                showPrice ? (
                                    <AiFillCaretDown />
                                ) : (
                                    <AiFillCaretDown className='-rotate-90' />
                                )
                            }

                            <p className="text-2xl font-medium" >Giá</p>
                        </div>
                        {showPrice && (
                            <ul className=' flex  flex-col gap-y-[10px] p-[10px] bg-white'>

                                <Link to={getFilterUrl({ price: price })}>

                                    <li onClick={handleClick} value="0-1000000" className={` cursor-pointer w-full rounded border flex justify-start p-[5px] ${"0-1000000" === price ? "bg-orange-100" : ""}   `}>
                                        0 - 1,000,000
                                    </li>
                                </Link>

                                <Link to={getFilterUrl({ price: price })}>
                                    <li onClick={handleClick} value="1000001-10000000" className={` cursor-pointer w-full rounded border flex justify-start p-[5px] ${"1000001-10000000" === price ? "bg-orange-100" : ""}`}>
                                        1,000,001 - 10,000,000
                                    </li>
                                </Link>

                                <Link to={getFilterUrl({ price: price })}>

                                    <li onClick={handleClick} value="10000001-100000000" className={` cursor-pointer w-full rounded border flex justify-start p-[5px] ${"10000001-100000000" === price ? "bg-orange-100" : ""}`}>
                                        10,000,001 - 100,000,000
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </div>


                </div>

                <div className='col-span-4  rounded  '>
                    <div className='flex justify-between bg-white p-[5px] items-center'>
                        <p className='text-xl'>kết quả</p>
                        <div>
                            <div className='relative cursor-pointer border rounded w-[150px] h-[40px] border rounded flex justify-between items-center px-[5px] ' onClick={() => setShow(!show)}>
                                <p>Sort by</p>
                                <AiFillCaretDown />

                                {
                                    show && (
                                        <div className='absolute w-[150px] z-1 z-10 top-[40px] left-0 bg-white rounded' >
                                            <ul className=''>
                                                <li className='hover:bg-red-200 p-[5px] cursor-pointer'>
                                                    Giá giảm dần
                                                </li>
                                                <li className='hover:bg-red-200 p-[5px] cursor-pointer'>
                                                    Giá tăng dần
                                                </li>
                                            </ul>
                                        </div>

                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className=' mt-[10px] rounded grid grid-cols-4 gap-[20px]'>
                        {loading ? (
                            <div className='col-span-4'>

                                <LoadingBox />
                            </div>
                        ) : error ? (
                            <div className='col-span-4'>

                                <MessageBox variant="danger">{error}</MessageBox>

                            </div>
                        ) : (
                            products.map((product) => (
                                <div key={product._id}>
                                    <Product product={product} />
                                </div>

                            ))
                        )}
                    </div>
                    <div className='mt-[20px] flex justify-center items-center'>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={pages}
                            onPageChange={handlePageChange}
                            number={localStorage.getItem('shoppingCurrentPage')}
                        />

                    </div>
                </div>
            </div>
            <Footer />

        </div>

    )
}

export default Shopping;

