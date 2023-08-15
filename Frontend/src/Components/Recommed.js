import React, { useEffect, useRef, useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Product from './Product'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Recommed = () => {
    const { id } = useParams();
    const [recomend, setRecommend] = useState([]);

    const effectRan = useRef(false)
    useEffect(() => {
        if (effectRan.current === false) {
            const fetchRecommend = async () => {
                try {
                    const data = { obj_id: id };
                    const res = await axios.post(`http://localhost:5000/receive`, data, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    setRecommend(res.data);
                } catch (error) {
                    console.error('Error fetching recommendations:', error);
                }
            }
            fetchRecommend();
            return () => {
                effectRan.current = true;
            }
        }
    }, [id]);

    if (!recomend) {
        return <p>Loading...</p>;
    }

    return (
        <div className="w-5/6 mx-auto mt-8">
            <div className="flex justify-between items-center ">
                <p className="font-semibold">Recommended</p>
                {/* <div className="flex items-center">
                    <p className="font-semibold">More</p>
                    <BiChevronRight />
                </div> */}
            </div>
            <div className="flex justify-between mt-4">
                {/* Pass the products array to the Product component */}
                <Product products={recomend} />
            </div>
        </div>
    )
}

export default Recommed