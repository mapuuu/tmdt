import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

    const renderPageNumbers = () => {
        const visiblePages = [];

        // Hiển thị trang hiện tại và 2 trang liền kề
        if (currentPage <= 2) {
            visiblePages.push(...pageNumbers.slice(0, 3));
            visiblePages.push('ellipsis');
            visiblePages.push(...pageNumbers.slice(totalPages - 1));
        }
        // Hiển thị trang hiện tại và 2 trang liền kề
        else if (currentPage >= totalPages - 1) {
            visiblePages.push(...pageNumbers.slice(0, 1));
            visiblePages.push('ellipsis');
            visiblePages.push(...pageNumbers.slice(currentPage - 2));
        }
        // Hiển thị trang hiện tại và 2 trang liền kề
        else {
            visiblePages.push(...pageNumbers.slice(0, 1));
            visiblePages.push('ellipsis');
            visiblePages.push(...pageNumbers.slice(currentPage - 2, currentPage + 1));
            visiblePages.push('ellipsis');
            visiblePages.push(...pageNumbers.slice(totalPages - 1));
        }

        const pageElements = visiblePages.map((item, index) => (
            <li key={index}>
                {item === 'ellipsis' ? (
                    <span className="ellipsis">...</span>
                ) : (
                    <button
                        className={`pagination-button ${currentPage === item ? 'active bg-green-500' : ''} hover:bg-green-500`}
                        onClick={() => handlePageClick(item)}
                    >
                        {item}
                    </button>
                )}
            </li>
        ));

        return pageElements;


    };

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
        scroll.scrollTo('#comment'); // Kéo lên đầu trang
    };

    const handlePreviousClick = () => {
        onPageChange(currentPage - 1);
        scroll.scrollTo('#comment'); // Kéo lên đầu trang
    };

    const handleNextClick = () => {
        onPageChange(currentPage + 1);
        scroll.scrollTo('#comment'); // Kéo lên đầu trang
    };

    return (
        <div className="pagination">
            <ul className="flex space-x-2 justify-center"> {/* Thêm lớp justify-center để căn giữa */}
                <li>
                    <button
                        className="pagination-button"
                        disabled={currentPage === 1}
                        onClick={handlePreviousClick}
                    >
                        Previous
                    </button>
                </li>
                {renderPageNumbers()}
                <li>
                    <button
                        className="pagination-button"
                        disabled={currentPage === totalPages}
                        onClick={handleNextClick}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;