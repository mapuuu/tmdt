import React from 'react';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import { BiCartAlt } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ProductDescription from './ProductDescription';

const ShoppingElement = ({ products }) => {

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    const productsPerRow = 6; // Number of products per row

    // Split products into rows
    const rows = [];
    for (let i = 0; i < products.length; i += productsPerRow) {
        rows.push(products.slice(i, i + productsPerRow));
    }

    return (
        <div>
            {rows.map((products, rowIndex) => (
                <div key={rowIndex} className="flex mt-4">
                    {products.map((product) => (
                        <div key={product._id} className="border rounded w-[280px] mr-2">
                            <Link to={`/product_detail/${product._id}`}>
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
                                    <ProductDescription description={truncateDescription(product.description, 50)} />

                                    {/* <p className="text-xs"></p> */}
                                    <div className="flex">
                                        <p>Số lượng {product.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-[250px] mx-auto justify-between">
                                    <p className="font-semibold text-xl">{product.price}</p>
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
            ))}
        </div>
    );
};

export default ShoppingElement;
