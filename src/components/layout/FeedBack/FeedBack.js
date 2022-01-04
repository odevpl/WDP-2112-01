import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from '../../features/Swipeable/Swipeable';
import styles from './FeedBack.module.scss';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FeedBack extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { activePage } = this.state;
    const { feedbacks } = this.props;
    const pagesCount = Math.ceil(feedbacks.length);

    const rightAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage + 1;
      if (newPage < pagesCount) {
        this.setState({ activePage: newPage });
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          {/* eslint-disable-next-line */}
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable leftAction={leftAction} rightAction={rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Client Feedback</h3>
                </div>
                <div className='col'></div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div className={styles.quoteArea}>
              {feedbacks.slice(activePage, activePage + 1).map(feed => (
                <div key={feed.id} className='col text-center'>
                  <div className='row justify-content-md-center'>
                    <p className={styles.quoteBox}>{feed.clientText}</p>
                  </div>
                  <div className='row justify-content-md-center'>
                    <div className='col col-lg-1'>
                      <img src={feed.clientImage} alt='client avatar' />
                    </div>
                    <div className='col col-lg-2'>
                      <h6>{feed.clientName}</h6>
                      <p>Furniture client</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

FeedBack.propTypes = {
  children: PropTypes.node,
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      clientName: PropTypes.string,
      clientText: PropTypes.string,
      clientImage: PropTypes.string,
    })
  ),
};

FeedBack.defaultProps = {
  feedbacks: [],
};

export default FeedBack;
