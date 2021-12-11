import { connect } from 'react-redux';
import {
  getAll,
  getActive,
  createActionChangeActiveCategory,
} from '../../../redux/categoriesRedux';
import ProductSearch from './ProductSearch';

const mapStateToProps = state => ({
  allCategories: getAll(state),
  activeCategoryId: getActive(state),
});

const mapDispatchToProps = dispatch => ({
  changeActiveCategory: categoryId =>
    dispatch(createActionChangeActiveCategory(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
