import React from 'react';
import './styles.css';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <nav className='pagination-nav'>
      <button
        className='page-button'
        onClick={() => paginate(currentPage === 1 ? totalPages : currentPage - 1)}
      >
        Previous
      </button>
      <span className='page-info'>
        {currentPage} of {totalPages}
      </span>
      <button
        className='page-button'
        onClick={() => paginate(currentPage === totalPages ? 1 : currentPage + 1)}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;