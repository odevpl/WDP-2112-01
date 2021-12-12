import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import styles from './ProductCompareBox.module.scss';

const ProductCompareBox = ({ id, img, remove }) => {
  return (
    <div className={styles.root}>
      <button onClick={() => remove(id)} className={`container ${styles.photo}`}>
        {/* do poprawy jak będą zdjęcia */}
        <img src={img} alt='photos to be' />
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faTimesCircle} className='fa-2x' />
        </div>
      </button>
    </div>
  );
};

ProductCompareBox.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  remove: PropTypes.func,
};

export default ProductCompareBox;
