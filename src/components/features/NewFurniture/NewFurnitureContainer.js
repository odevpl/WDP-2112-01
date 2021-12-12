import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getPromos } from '../../../redux/promosRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  promos: getPromos(state),
});

export default connect(mapStateToProps)(NewFurniture);
