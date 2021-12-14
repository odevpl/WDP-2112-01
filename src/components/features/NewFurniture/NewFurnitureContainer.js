import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, createActionChangeFavourite } from '../../../redux/productsRedux.js';
import { getPromos } from '../../../redux/promosRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  promos: getPromos(state),
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
