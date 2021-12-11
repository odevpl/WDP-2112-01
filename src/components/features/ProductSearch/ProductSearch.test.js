import React from 'react';
import { shallow } from 'enzyme';
import ProductSearch from './ProductSearch';

const mockProps = {
  allCategories: [],
  activeCategoryId: '',
  changeActiveCategory: () => {},
};

describe('Component ProductSearch', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductSearch {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
