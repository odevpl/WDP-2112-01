import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotions from '../../features/Promotions/Promotions';
import Brands from '../../layout/Brands/Brands';
import FeedBack from '../../layout/FeedBack/FeedBackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Brands />
    <FeedBack />
  </div>
);

export default Homepage;
