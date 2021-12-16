import { connect } from 'react-redux';
import {
  addProductToCompare,
  getAllToCompare,
  getCount,
} from '../../../redux/compareRedux';
import ProductBox from './ProductBox';
import getAll from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  compareList: getAllToCompare(state),
  compareCount: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: payload => dispatch(addProductToCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
