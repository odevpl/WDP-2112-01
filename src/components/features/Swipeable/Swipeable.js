import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const [touchStart, setTouchStart] = useState(0);
  // set necessary distance for swipe to work
  const swipedDistance = 100;

  const handleTouchStart = event => {
    setTouchStart(event.clientX);
  };

  const handleTouchEnd = event => {
    if (event.clientX - touchStart > swipedDistance) {
      rightAction();
    } else if (event.clientX - touchStart < -swipedDistance) {
      leftAction();
    }
  };

  return (
    <div
      onMouseDown={event => handleTouchStart(event)}
      onMouseUp={event => handleTouchEnd(event)}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
