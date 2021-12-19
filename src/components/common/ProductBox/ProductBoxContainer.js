import { connect } from 'react-redux';
import { addProductToCompare, getAll, getCount } from '../../../redux/compareRedux';
import ProductBox from './ProductBox';
import getAllProducts from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  compareList: getAll(state),
  compareCount: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: payload => dispatch(addProductToCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
