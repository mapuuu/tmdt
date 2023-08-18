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
            <section id='comment' className="bg-white dark:bg-gray-900 py-8 lg:py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Đánh giá sản phẩm</h2>
                    </div>
                    {/* <form className="mb-6">
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
                    </form> */}
                    {currentComments.map((comment) => (
                        <article key={comment._id} className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                        className="mr-2 w-8 h-8 rounded-full"
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

                        // <div key={comment._id}
                        //     className="p-3 mb-4 border border-gray-200 rounded-md bg-gray-50 lg:p-6 dark:bg-gray-700 dark:border-gray-700">
                        //     <div className="md:block lg:flex">
                        //         <img className="object-cover w-16 h-16 mr-4 rounded-full shadow"
                        //             src={comment.userImage} alt="avatar" />
                        //         <div>
                        //             <div className="flex flex-wrap items-center justify-between mb-1">
                        //                 <div className="mb-2 md:mb-0">
                        //                     <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                        //                         {comment.userName}
                        //                     </h2>
                        //                     <p className="text-xs text-gray-600 dark:text-gray-400">{comment.created_at}</p>
                        //                 </div>
                        //                 <div>
                        //                     <ul className="flex items-center pb-1 mb-2">
                        //                         <li>
                        //                             <a href="#">
                        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        //                                     fill="currentColor"
                        //                                     className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                        //                                     viewBox="0 0 16 16">
                        //                                     <path
                        //                                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                        //                                     </path>
                        //                                 </svg>
                        //                             </a>
                        //                         </li>
                        //                         <li>
                        //                             <a href="#">
                        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        //                                     fill="currentColor"
                        //                                     className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                        //                                     viewBox="0 0 16 16">
                        //                                     <path
                        //                                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                        //                                     </path>
                        //                                 </svg>
                        //                             </a>
                        //                         </li>
                        //                         <li>
                        //                             <a href="#">
                        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        //                                     fill="currentColor"
                        //                                     className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                        //                                     viewBox="0 0 16 16">
                        //                                     <path
                        //                                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                        //                                     </path>
                        //                                 </svg>
                        //                             </a>
                        //                         </li>
                        //                         <li>
                        //                             <a href="#">
                        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        //                                     fill="currentColor"
                        //                                     className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                        //                                     viewBox="0 0 16 16">
                        //                                     <path
                        //                                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                        //                                     </path>
                        //                                 </svg>
                        //                             </a>
                        //                         </li>
                        //                         <li>
                        //                             <a href="#">
                        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        //                                     fill="currentColor"
                        //                                     className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-half"
                        //                                     viewBox="0 0 16 16">
                        //                                     <path
                        //                                         d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                        //                                     </path>
                        //                                 </svg>
                        //                             </a>
                        //                         </li>
                        //                     </ul>
                        //                     <div className="flex items-center">
                        //                         <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                        //                             <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                        //                                 height="16" fill="currentColor"
                        //                                 className="w-4 h-4 mr-1 text-blue-400 bi bi-hand-thumbs-up-fill"
                        //                                 viewBox="0 0 16 16">
                        //                                 <path
                        //                                     d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z">
                        //                                 </path>
                        //                             </svg></a>
                        //                             <span>12</span>
                        //                         </div>
                        //                         <div className="flex text-sm text-gray-700 dark:text-gray-400">
                        //                             <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                        //                                 height="16" fill="currentColor"
                        //                                 className="w-4 h-4 mr-1 text-blue-400 bi bi-chat"
                        //                                 viewBox="0 0 16 16">
                        //                                 <path
                        //                                     d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z">
                        //                                 </path>
                        //                             </svg></a>
                        //                             <span>8</span>
                        //                         </div>
                        //                     </div>
                        //                 </div>
                        //             </div>
                        //             <p className="mt-3 text-sm text-gray-700 dark:text-gray-400">
                        //                 {comment.comment}
                        //             </p>
                        //         </div>
                        //     </div>
                        // </div>
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