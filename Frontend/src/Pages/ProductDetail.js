import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductDescription from '../Components/ProductDescription';
import { BiChevronRight } from 'react-icons/bi';
import Comment from '../Components/Comment';
import Recommed from '../Components/Recommed';
import SubCate from '../Components/SubCate';
import { animateScroll as scroll } from 'react-scroll';

const ProductDetail = ({ }) => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const [comments, setComments] = useState(null);

    const [subCategories, setSubCategories] = useState(null);

    // console.log(id)

    const effectRan = useRef(false)
    useEffect(() => {
        // if (effectRan.current === false) {
        const fetchProduct = async () => {
            try {
                console.log(id)
                const response = await axios.get(`http://localhost:4000/v4/product/${id}/getProductById`);
                setProduct(response.data); // Assuming the API response is the product object
                setComments(response.data.comments)
                setSubCategories(response.data.sub_categories)
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
        // return () => {
        //     effectRan.current = true;
        // }
    }
        , [id]);

    console.log(subCategories)

    const handleNextClick = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    function formatNumberWithCommas(number) {
        return new Intl.NumberFormat('en-US').format(number);
    }

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="bg-white">
                <div className="pt-6">
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img src={product.images} alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
                        </div>
                    </div>


                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        </div>

                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">{formatNumberWithCommas(product.price)} VNĐ</p>

                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">

                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="sr-only">{product.rate}</p>
                                    <p href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{product.numberOfReviews} reviews</p>
                                </div>
                            </div>

                            {/* <form className="mt-10">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                    <fieldset className="mt-4">
                                        <legend className="sr-only">Choose a color</legend>
                                        <div className="flex items-center space-x-3">

                                            <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                                <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                                <span id="color-choice-0-label" className="sr-only">White</span>
                                                <span aria-hidden="true" className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
                                            </label>

                                            <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                                                <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                                                <span id="color-choice-2-label" className="sr-only">Black</span>
                                                <span aria-hidden="true" className="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                        <p href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</p>
                                    </div>

                                    <fieldset className="mt-4">
                                        <legend className="sr-only">Choose a size</legend>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                                            <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
                                                <input type="radio" name="size-choice" value="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label" />
                                                <span id="size-choice-0-label">XXS</span>
                                                <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                                    <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                                        <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" />
                                                    </svg>
                                                </span>
                                            </label>

                                            <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                                                <span id="size-choice-1-label">XS</span>

                                                <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>

                                <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                            </form> */}

                            <SubCate subCategories={subCategories} />

                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            <div>
                                <h3 className="sr-only">Mô tả:</h3>

                                <div className="space-y-6">
                                    <ProductDescription description={product.description} />
                                </div>

                            </div>

                            <Comment comments={comments} />
                            {/* {product.comments.map((comment) => (
                                <div key={comment._id} className="comment">
                                    <img src={comment.userImage} alt="User Avatar" className="user-avatar" />
                                    <div className="comment-details">
                                        <strong className="user-name">{comment.userName}</strong>
                                        <p className="rating">Rating: {comment.rating}</p>
                                        <p className="comment-text">{comment.comment}</p>
                                    </div>
                                </div>
                            ))} */}
                            {/* <div className="bg-white py-24 sm:py-32">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto max-w-2xl lg:mx-0">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                                    <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                                </div>
                                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    <article className="flex max-w-xl flex-col items-start justify-between">
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                                        </div>
                                        <div className="group relative">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                <a href="#">
                                                    <span className="absolute inset-0"></span>
                                                    Boost your conversion rate
                                                </a>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                                        </div>
                                        <div className="relative mt-8 flex items-center gap-x-4">
                                            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">
                                                    <a href="#">
                                                        <span className="absolute inset-0"></span>
                                                        Michael Foster
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">Co-Founder / CTO</p>
                                            </div>
                                        </div>
                                    </article>

                                </div>
                            </div>
                        </div> */}

                        </div>
                    </div>
                </div>

            </div>

            <div onClick={handleNextClick}>
                <Recommed products={product} />
            </div>
        </>
    )
}

export default ProductDetail