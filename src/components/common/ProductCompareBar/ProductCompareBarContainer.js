import { connect } from 'react-redux';
import { getAllToCompare, removeProductFromCompare } from '../../../redux/compareRedux';
import ProductCompareBar from './ProductCompareBar';

const mapStateToProps = state => ({
  compareList: getAllToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCompare: payload => dispatch(removeProductFromCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCompareBar);
