import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { totalItems, perPage, onPageChange} = props;
    const pagesCount = Math.ceil(totalItems / perPage);
    // Don't render paginaiton if everything fits on one page
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount  +1);
    return (  
        <nav>
            <ul className="pagination">
            {pages.map(page => (
                <li className="page-item" key={page}>
                    <button className="page-link" onClick={() => onPageChange(page)}>{page}
                    </button>
                </li>))}
            </ul>
        </nav> );
}

 
export default Pagination;