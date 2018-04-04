import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  shouldComponentUpdate () {
    return false;
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          { this.props.children }
        </div>
      </Provider>
    );
  }
}

export default AppContainer;
