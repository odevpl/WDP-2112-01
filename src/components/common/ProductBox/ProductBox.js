import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarsRating from '../StarsRating/StarsRatingContainer';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  noPromoPrice,
  heart,
  arrows,
  changeFavourite,
  id,
  compareList,
  compareCount,
  addToCompare,
  image,
  userRating,
  isHovered,
}) => {
  const handleAddToCompare = (event, id) => {
    const inCompare = compareList.some(product => product.id === id);
    event.preventDefault();
    if (compareCount < 4 && !inCompare) {
      addToCompare({ id });
    }
  };

  return (
    <div
      className={styles.root}
      onMouseEnter={() => isHovered(true)}
      onMouseLeave={() => isHovered(false)}
    >
      <div className={styles.photo}>
        <img src={image} alt='some furniture' className={styles.image} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          <StarsRating stars={stars} id={id} userRating={userRating} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={() => changeFavourite(!heart, id)}
            className={heart ? styles.heart : ''}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={arrows ? styles.heart : ''}
            onClick={event => handleAddToCompare(event, id)}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        {/* MM change start
          <div className={styles.line}></div>
        MM change end*/}
        <div className={styles.actions}>
          <div className={styles.outlines}></div>
          <div className={styles.price}>
            <div className={styles.noPromoPrice}>
              <span>{noPromoPrice}</span>
            </div>
            <Button noHover variant='small'>
              $ {price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  noPromoPrice: PropTypes.string,
  heart: PropTypes.bool,
  arrows: PropTypes.bool,
  id: PropTypes.string,
  changeFavourite: PropTypes.func,
  compareCount: PropTypes.number,
  compareList: PropTypes.array,
  addToCompare: PropTypes.func,
  image: PropTypes.node,
  isHovered: PropTypes.func,
  userRating: PropTypes.number,
};

ProductBox.defaultProps = {
  isHovered: () => null,
};

export default ProductBox;
