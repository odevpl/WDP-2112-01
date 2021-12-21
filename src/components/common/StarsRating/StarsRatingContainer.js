import { connect } from 'react-redux';
import { setRating } from '../../../redux/productsRedux.js';
import StarsRating from './StarsRating.js';

const mapDispatcherToProps = dispatcher => ({
  setRating: (userRating, id) =>
    dispatcher(setRating({ id: id, userRating: userRating })),
});

export default connect(null, mapDispatcherToProps)(StarsRating);
