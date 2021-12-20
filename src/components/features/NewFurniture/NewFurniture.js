import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import Swipe from '../../common/Swipe/Swipe';
import ProductCompareBar from '../../common/ProductCompareBar/ProductCompareBarContainer';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fade: false,
  };

  handleStateChange(changedItem, changeType) {
    this.setState({ fade: true });
    this.timer = setTimeout(() => {
      this.setState({ fade: false });
      const newState = {};
      newState[changeType] = changedItem;
      this.setState(newState);
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handlePageChange(newPage) {
    this.handleStateChange(newPage, 'activePage');
  }

  handleCategoryChange(newCategory) {
    this.handleStateChange(newCategory, 'activeCategory');
  }

  movePageToLeft = () => {
    const activePage = this.state.activePage;
    if (activePage > 0) {
      this.handlePageChange(activePage - 1);
    }
  };

  movePageToRight = () => {
    const activePage = this.state.activePage;
    const maxPageIndex = this.pagesCount - 1;
    if (activePage < maxPageIndex) {
      this.handlePageChange(activePage + 1);
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

  getProductsPerPage(currentRenderingMode, renderingModes, defaultPages = 8) {
    const renderingMode = renderingModes.find(
      mode => mode.id === currentRenderingMode.id
    );
    return renderingMode ? renderingMode.productsPerPage : defaultPages;
  }

  render() {
    const {
      categories,
      products,
      promos,
      changeFavourite,
      currentRenderingMode,
      renderingModes,
    } = this.props;
    const { activeCategory, activePage, fade } = this.state;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const productsPerPage = this.getProductsPerPage(
      currentRenderingMode,
      renderingModes
    );
    this.pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

    const dots = [];
    const highestDotIndex = 2;
    const maxPageIndex = this.pagesCount - 1;
    let startDot =
      activePage > 0
        ? activePage === maxPageIndex
          ? activePage - highestDotIndex
          : activePage - 1
        : 0;
    startDot = startDot < 0 ? 0 : startDot;
    const lastDot =
      startDot + highestDotIndex > maxPageIndex
        ? maxPageIndex
        : startDot + highestDotIndex;
    for (let i = startDot; i <= lastDot; i++) {
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
                <div
                  className={'col-5 col-sm-4 col-md-3 col-lg-auto ' + styles.heading}
                >
                  <h3>New furniture</h3>
                </div>
                <div className={'col-7 col-sm-8 col-md-7 col-lg ' + styles.menu}>
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
                <div className={'col-sm- col-md-2 col-lg-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={`row ${styles.productsList} ${fade ? styles.fade : ``}`}>
              {categoryProducts
                .slice(activePage * productsPerPage, (activePage + 1) * productsPerPage)
                .map(item => (
                  <div
                    key={item.id}
                    className={'col-6 col-md-4 col-lg-3 ' + styles.colExtraSmall}
                  >
                    <ProductBox
                      {...item}
                      changeFavourite={changeFavourite}
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
        <ProductCompareBar />
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
      heart: PropTypes.bool,
    })
  ),
  renderingModes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      min: PropTypes.number,
      max: PropTypes.number,
      productsPerPage: PropTypes.number,
    })
  ),
  currentRenderingMode: PropTypes.object,
  changeFavourite: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  promos: [],
  renderingModes: [],
  currentRenderingMode: {},
};

export default NewFurniture;
