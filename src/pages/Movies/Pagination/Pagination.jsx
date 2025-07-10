import React from 'react';
import "./Pagination.scss";


export const Pagination = ({currentPage, totalItems, itemsPerPage, onPageChange}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages === 1) return null;

    return (
        <div className='pagination'>
            {Array.from({length: totalPages}, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => {onPageChange(i + 1);}}
                    className={currentPage === i + 1 ? "active" : ""}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}