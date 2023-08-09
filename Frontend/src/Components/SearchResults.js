import React from 'react'

const SearchResults = ({ searchResults, setQueryText }) => {

    const handleResultClick = (name) => {
        setQueryText(name); // Cập nhật giá trị trong input
    };

    return (
        <div>
            {searchResults.length === 0 ? (
                <p className="p-2">No search results found.</p>
            ) : (
                searchResults.map(({ _id, name, numberOfReviews, rate }) => (
                    <div
                        style={{
                            gridTemplateColumns: '6fr',
                            gridColumnGap: '1rem',
                            // height: '70px',
                            overflow: 'hidden',
                            width: '565px'
                        }}
                        key={_id}
                        className="p-2 hover:bg-teal-500 hover:text-white cursor-pointer"
                        onClick={() => handleResultClick(name)}
                    >
                        <div align='start'>
                            <p>{name}</p>
                            {/* <p>{numberOfReviews}</p>
                            <p>{rate}</p> */}
                        </div>
                    </div>
                ))
            )}
        </div>

    )
}

export default SearchResults