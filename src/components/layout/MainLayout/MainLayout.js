import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const getModeFromViewport = (renderingModes, viewportWidth) =>
  renderingModes.find(
    mode =>
      (!mode.min || viewportWidth >= mode.min) &&
      (!mode.max || viewportWidth <= mode.max)
  );

const setModeOnUpdate = ({
  renderingModes,
  setNewRenderingMode,
  currentRenderingMode,
}) => {
  const newMode = getModeFromViewport(renderingModes, window.innerWidth);
  setNewRenderingMode(newMode);
};

const MainLayout = props => {
  const { currentRenderingMode, children } = props;
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const handleViewportResize = () => {
      const { min, max } = currentRenderingMode;
      const viewportWidth = window.innerWidth;
      if ((min && viewportWidth < min) || (max && viewportWidth > max)) {
        setRerender(!rerender);
      }
    };
    setModeOnUpdate(props);
    if (!currentRenderingMode.id) {
      setRerender(!rerender);
      return;
    }
    window.addEventListener('resize', handleViewportResize);
    return () => window.removeEventListener('resize', handleViewportResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerender]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  renderingModes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      min: PropTypes.number,
      max: PropTypes.number,
      productsPerPage: PropTypes.number,
    })
  ),
  currentRenderingMode: PropTypes.object,
  setNewRenderingMode: PropTypes.func,
};

export default MainLayout;
