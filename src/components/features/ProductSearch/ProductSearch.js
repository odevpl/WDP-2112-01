import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSearch.module.scss';

const ProductSearch = ({ allCategories, activeCategoryId, changeActiveCategory }) => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <div className={styles.dropdown}>
        <div className={styles.dropdownContainer}>
          <span>select category</span>
        </div>
        <div className={styles.dropdownContent}>
          <ul>
            <li>
              <a href='#'>Bed</a>
            </li>
            <li>
              <a href='#'>Chair</a>
            </li>
            <li>
              <a href='#'>Sofa</a>
            </li>
            <li>
              <a href='#'>Table</a>
            </li>
            <li>
              <a href='#'>Dining</a>
            </li>
          </ul>
        </div>
      </div>
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
