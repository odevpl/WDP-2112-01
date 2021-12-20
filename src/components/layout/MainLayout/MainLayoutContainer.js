import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import {
  getAllModes,
  getCurrentMode,
  createActionSetNewRenderingMode,
} from '../../../redux/mainLayoutRedux.js';

const mapStateToProps = state => ({
  renderingModes: getAllModes(state),
  currentRenderingMode: getCurrentMode(state),
});

const mapDispatchToProps = dispatch => ({
  setNewRenderingMode: newMode => dispatch(createActionSetNewRenderingMode(newMode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
