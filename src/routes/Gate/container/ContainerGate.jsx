import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from '@/store/injectReducer';
import injectSaga from '@/store/injectSaga';

import reducer from '../reducer';
import saga from '../saga';

import Gate from '../components/Gate';

// const mapStateToProps = {
//   isGateHover:
// };

// const mapDispatchToProps = f => f;

const withConnect = connect();

const withReducer = injectReducer({ key: 'Gate', reducer });
const withSaga = injectSaga({ key: 'Gate', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Gate);
