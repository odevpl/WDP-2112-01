import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSearch.module.scss';

const ProductSearch = ({ allCategories, activeCategoryId, changeActiveCategory }) => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul>
        <li>
          Select a category
          <ul>
            <li>Bed</li>
            <li>Chair</li>
            <li>Sofa</li>
            <li>Table</li>
            <li>Dining</li>
          </ul>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
  allCategories: PropTypes.array,
  activeCategoryId: PropTypes.string,
  changeActiveCategory: PropTypes.func,
};

export default ProductSearch;
