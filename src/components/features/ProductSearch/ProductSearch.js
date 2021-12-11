import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const renderListItem = (
  categoryId,
  categoryName,
  changeActiveCategory,
  nestedList = ''
) => (
  <li
    key={categoryId}
    id={categoryId}
    onClick={event => changeActiveCategory(event.target.id)}
  >
    {categoryName}
    {nestedList}
  </li>
);

const renderNestedList = (categories, changeActiveCategory, defaultItem = '') => (
  <ul>
    {defaultItem}
    {sortCategories(categories).map(category =>
      renderListItem(category.id, category.name, changeActiveCategory)
    )}
  </ul>
);

const sortCategories = categories =>
  categories.sort((prev, next) => {
    if (prev.id < next.id) {
      return -1;
    } else {
      return 1;
    }
  });

const excludeActive = (categories, activeCategoryId) =>
  categories.filter(category => category.id !== activeCategoryId);

const ProductSearch = ({ allCategories, activeCategoryId, changeActiveCategory }) => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul className={styles.categoryList}>
        {!activeCategoryId
          ? renderListItem(
              '',
              'Select a category',
              changeActiveCategory,
              renderNestedList(allCategories, changeActiveCategory)
            )
          : renderListItem(
              activeCategoryId,
              allCategories.find(category => category.id === activeCategoryId).name,
              changeActiveCategory,
              renderNestedList(
                excludeActive(allCategories, activeCategoryId),
                changeActiveCategory,
                renderListItem('', 'Select a category', changeActiveCategory)
              )
            )}
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
