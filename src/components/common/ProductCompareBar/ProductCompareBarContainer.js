import { getAll, removeProductFromCompare } from '../../../redux/compareRedux';

import ProductCompareBar from './ProductCompareBar';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  compareList: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCompare: payload => dispatch(removeProductFromCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCompareBar);
