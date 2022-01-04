
import { connect } from 'react-redux';

import FeedBack from './FeedBack';
import { getAll } from '../../../redux/feedbacksRedux.js';

const mapStateToProps = state => ({
  feedbacks: getAll(state),
});

export default connect(mapStateToProps)(FeedBack);
