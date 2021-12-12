import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipe from '../../common/Swipe/Swipe';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  movePageToLeft = () => {
    const activePage = this.state.activePage;
    if (activePage > 0) {
      this.setState({
        ...this.state,
        activePage: activePage - 1,
      });
    }
  };

  movePageToRight = () => {
    const activePage = this.state.activePage;
    const maxPageIndex = this.pagesCount - 1;
    if (activePage < maxPageIndex) {
      this.setState({
        ...this.state,
        activePage: activePage + 1,
      });
    }
  };

  getNoPromoPrice(promoPrice, promoId, promosAll) {
    const promoInfo = promosAll.find(promo => promoId === promo.id);
    return promoInfo
      ? (promoPrice / (1 - promoInfo.rate)).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })
      : '';
  }

  render() {
    const { categories, products, promos } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    this.pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < this.pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipe leftAction={this.movePageToLeft} rightAction={this.movePageToRight}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory && styles.active}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className='row'>
              {categoryProducts
                .slice(activePage * 8, (activePage + 1) * 8)
                .map(item => (
                  <div key={item.id} className='col-3'>
                    <ProductBox
                      {...item}
                      noPromoPrice={this.getNoPromoPrice(
                        item.price,
                        item.promo,
                        promos
                      )}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Swipe>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  promos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      rate: PropTypes.number,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  promos: [],
};

export default NewFurniture;
