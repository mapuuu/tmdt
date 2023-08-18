import React, { useState } from 'react'
import Pagination from './pagination';

const Comment = ({ comments }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;

    // Tính toán chỉ mục bắt đầu và chỉ mục kết thúc của các comment trên trang hiện tại
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);


    return (
        <div>
            <section id="comment" className="bg-white dark:bg-gray-900 py-8 lg:py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Đánh giá sản phẩm</h2>
                    </div>
                    <form className="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label htmlFor="comment" className="sr-only">Your comment</label>
                            <textarea rows="6"
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Post comment
                        </button>
                    </form>
                    {currentComments.map((comment) => (
                        <article key={comment._id} className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                        className="mr-2 w-6 h-6 rounded-full"
                                        src={comment.userImage}
                                        alt="Helene Engels" />{comment.userName}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="true" dateTime="2022-06-23"
                                        title="June 23rd, 2022">{comment.created_at}</time></p>
                                </div>
                                <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                        </path>
                                    </svg>
                                </button>
                                <div id="dropdownComment4"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <div className="flex items-center">
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="true" dateTime="2022-06-23"
                                    title="June 23rd, 2022">Rating {comment.rating}</time></p>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button type="button"
                                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                                    <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                    ))}

                    <div className="flex justify-center mt-4">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(comments.length / commentsPerPage)}
                            onPageChange={setCurrentPage}
                            hasComments={comments.length > 0}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Comment