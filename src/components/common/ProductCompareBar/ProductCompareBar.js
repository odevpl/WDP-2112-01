import Button from '../Button/Button';
import styles from './ProductCompareBar.module.scss';
import ProductCompareBox from '../ProductCompareBox/ProductCompareBox';
import React from 'react';
import PropTypes from 'prop-types';

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
        <div className={styles.compare}>
          <div className='container'>
            <div className='row'>
              <div className='row col-8'>
                {compareList.map(product => (
                  <div key={product.id} className='col-3'>
                    <ProductCompareBox {...product} remove={removeFromCompare} />
                  </div>
                ))}
              </div>
              <div className='col-2'>
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
