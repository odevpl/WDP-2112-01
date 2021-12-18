import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, createActionChangeFavourite } from '../../../redux/productsRedux.js';
import { getPromos } from '../../../redux/promosRedux.js';
import { getAllModes, getCurrentMode } from '../../../redux/mainLayoutRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  promos: getPromos(state),
  renderingModes: getAllModes(state),
  currentRenderingMode: getCurrentMode(state),
});

const mapDispatchToProps = dispatch => ({
  changeFavourite: (isFavourite, productId) =>
    dispatch(
      createActionChangeFavourite({
        id: productId,
        heart: isFavourite,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
