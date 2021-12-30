import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedBack.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import initialState from '../../../redux/initialState';

const Feedback = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client Feedback</h3>
            </div>
            <div className='col'></div>
            <div className={'col-auto ' + styles.dots}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
        </div>
        <div className={styles.quoteArea}>
          <div key={initialState.feedback[0].id} className='col text-center'>
            <div className='row justify-content-md-center'>
              <p className={styles.quoteBox}>{initialState.feedback[0].clientText}</p>
            </div>
            <div className='row justify-content-md-center'>
              <div className='col col-lg-1'>
                <img src={initialState.feedback[0].clientImage} alt='client avatar' />
              </div>
              <div className={'col col-lg-2 ' + styles.desc}>
                <h6>{initialState.feedback[0].clientName}</h6>
                <p>Furniture client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  id: PropTypes.string,
  clientName: PropTypes.string,
  clientText: PropTypes.string,
  clientImage: PropTypes.node,
  dots: PropTypes.string,
};

Feedback.defaultProps = {
  feedbacks: [],
};

export default Feedback;
