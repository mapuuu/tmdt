import React from 'react';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import { BiCartAlt } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FormatDes from './formatDes';

const RecommendList = ({ products }) => {
    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    function formatNumberWithCommas(number) {
        return new Intl.NumberFormat('en-US').format(number);
    }

    console.log(products)

    const productsPerRow = 5; // Number of products per row

    return (
        <div className="overflow-x-auto"> {/* Scrollable container */}
            <div className="flex mt-4">
                {products.map((product) => (
                    <div key={product._id} className="border rounded w-[280px] mr-5">
                        <Link to={`/product/${product._id}`}>
                            <div className="bg-gray-200 w-[250px] h-[250px] rounded mx-auto my-[15px]">

                                <img src={product.images} alt="" style={{ height: '250px', width: '100%' }} />

                            </div>
                            <div className="flex w-[250px] mx-auto justify-between">

                                <p className="">{truncateDescription(product.name, 20)}</p>
                                <div className="flex items-center gap-x-[4px]">
                                    <p>{product.rate}</p>
                                    <AiFillStar className="text-yellow-300" />
                                </div>
                            </div>

                            <div className="flex items-center w-[250px] justify-between mx-auto my-[5px]">
                                <FormatDes description={truncateDescription(product.description, 50)} />

                                {/* <p className="text-xs"></p> */}
                                <div className="flex">
                                    <p>Số lượng {product.quantity}</p>
                                </div>
                            </div>
                            <div className="flex items-center w-[250px] mx-auto justify-between">
                                <p className="font-semibold text-xl">{formatNumberWithCommas(product.price)}</p>
                                <div className="flex justify-center items-center border rounded-md p-[5px] mb-[15px]">
                                    <p>Buy now</p>
                                </div>
                            </div>

                            <div className="flex absolute w-full h-full bg-black/60 top-0 rounded justify-center items-center hidden">
                                <div className="flex text-white gap-x-[20px]">
                                    <BsFillEyeFill className="text-3xl hover:text-black" />
                                    <AiFillHeart className="text-3xl hover:text-red-600" />
                                    <BiCartAlt className="text-3xl hover:text-black" />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendList;
