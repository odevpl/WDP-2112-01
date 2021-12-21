import React from 'react';
import styles from './Promotions.module.scss';
import initialState from '../../../redux/initialState';

const Promotions = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-6 '}>
            <div className={styles.imgFirst}>
              <img src={initialState.sofa[0].image} alt='promo sofa' />
              <div className={'col' + styles.col}>
                <div className={styles.contentWrapperFirst}>
                  <p>
                    GUEST ROOM <br /> <span>SOFA</span>
                  </p>
                  <p>-20%</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-6 '}>
            <div className={'col' + styles.col}>
              <div>
                <div className={styles.imgSecond}>
                  <img src={initialState.chairs[0].image} alt='promo chair' />
                  <div className={styles.contentWrapperSecondUp}>
                    <p>
                      <span>OFFICE</span> CHAIR <br />
                      COLLECTION
                    </p>
                    <p>$200.00</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.imgSecond}>
                  <img
                    src={initialState.products[13].image}
                    alt='promo special collection'
                  />
                  <div className={styles.contentWrapperSecondDown}>
                    <p>
                      <span>SPECIAL</span> COLLECTION
                    </p>
                    <p>SAVE UP 45% OF FURNITURE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
