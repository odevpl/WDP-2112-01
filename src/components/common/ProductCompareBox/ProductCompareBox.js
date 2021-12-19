import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import styles from './ProductCompareBox.module.scss';

const ProductCompareBox = ({ id, image, remove }) => {
  return (
    <div className={styles.root}>
      <button onClick={() => remove(id)} className={`container ${styles.photo}`}>
        <img src={image} alt='some bed' className={styles.image} />
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faTimesCircle} className='fa-2x' />
        </div>
      </button>
    </div>
  );
};

ProductCompareBox.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  remove: PropTypes.func,
};

export default ProductCompareBox;
