import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { Hint } from 'react-autocomplete-hint';
import SearchResults from './SearchResults';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [queryText, setQueryText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [firstProductNameArray, setFirstProductNameArray] = useState([]);

    const handleChange = (e) => setQueryText(e.target.value);

    useEffect(() => {
        if (!queryText) {
            setSearchResults([]);
        } else {
            (async () => {
                const url = 'http://localhost:4000/v4/product/search';
                // const url = 'http://localhost:8080/search';

                try {
                    const response = await axios.get(url, {
                        params: {
                            name: queryText,
                        }
                    });

                    setSearchResults(response.data);

                    if (response.data.length > 0) {
                        const firstProductName = response.data[0].name;
                        console.log(response.data[0]._id)
                        setFirstProductNameArray([firstProductName]);
                    }
                } catch (error) {
                    console.error('Error fetching search results:', error);
                }
            })();
        }
    }, [queryText]);

    const navigate = useNavigate()

    const handleResultClick = (productId) => {
        setQueryText(''); // Reset giá trị input
        setSearchResults([]); // Xóa kết quả tìm kiếm
        // Chuyển đến trang ProductDetail với ID sản phẩm được chọn
        navigate(`/product_detail/${productId}`);
    };

    return (
        <div style={{
            flexDirection: 'column', // Hiển thị các phần tử thẳng hàng
            width: '600px'
        }}
            className="flex flex-col rounded-lg overflow-hidden shadow-lg max-w-600px w-90 mt-1rem mx-auto">
            <div className="relative flex items-stretch h-70">
                <Hint options={firstProductNameArray}>
                    <input
                        style={{
                            padding: '0 30px',
                            w: '100%',
                            h: '68px',
                            pl: '68px',
                            fontWeight: 'medium',
                            outline: 0,
                            width: '595px',
                            height: '70px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        type=""
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                        placeholder="Tìm kiếm tên sản phẩm..."
                        value={queryText}
                        onChange={handleChange}
                    />
                </Hint>
            </div>
            {queryText && (
                <div className="max-h-70vh p-0 overflow-y-auto absolute top-[130px] z-5 bg-gray-300 ">
                    <div className="px-4">
                        <ul className="border-t-1 border-gray-300 pt-2 pb-4 ">
                            <SearchResults searchResults={searchResults} handleResultClick={handleResultClick} />
                        </ul>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Search