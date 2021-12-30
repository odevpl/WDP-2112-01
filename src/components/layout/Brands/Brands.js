import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import initialState from '../../../redux/initialState';

const Brands = () => {

  return (
    <div className={styles.root}>
      <div className='container'>
        <div
          className={
            'row no-gutters justify-content-between ' + styles.borderline
          }
        >
          <div className={`col-1`}>
            <Button className={styles.button}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
          </div>
          <div className='col-10'>
            <div className='row justify-content-between'>
              <img src={initialState.brands[0].image} alt='brands-1' />
              <img src={initialState.brands[1].image} alt='brands-2' />
              <img src={initialState.brands[2].image} alt='brands-3' />
              <img src={initialState.brands[3].image} alt='brands-4' />
              <img src={initialState.brands[4].image} alt='brands-5' />
              <img src={initialState.brands[5].image} alt='brands-6' />
            </div>
          </div>
          <div className={`col-1`}>
            <Button className={styles.button}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;
