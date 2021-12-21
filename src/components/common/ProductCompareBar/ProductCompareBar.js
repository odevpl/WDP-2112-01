import Button from '../../common/Button/Button';
import ProductCompareBox from '../../common/ProductCompareBox/ProductCompareBox';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProductCompareBar.module.scss';

class ProductCompareBar extends React.Component {
  static propTypes = {
    compareList: PropTypes.array,
    removeFromCompare: PropTypes.func,
  };

  render() {
    const { compareList, removeFromCompare } = this.props;
    let content = null;
    if (compareList && compareList.length > 0) {
      content = (
        <div className={styles.sticky}>
          <div className='container'>
            <div className='row'>
              <div className='row col-10'>
                {compareList.map(product => (
                  <div key={product.id} className={`col-3 ${styles.compareListColumn}`}>
                    <ProductCompareBox {...product} remove={removeFromCompare} />
                  </div>
                ))}
              </div>
              <div className='col-2 my-auto'>
                <Button>Compare</Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return content;
  }
}

export default ProductCompareBar;
