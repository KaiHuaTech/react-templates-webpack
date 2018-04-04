import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { locationChange } from '@/store/location';

import Gate from './Gate';
import Chat from './Chat';


// eslint-disable-next-line
const mapStateToProps = (state, ownProps) => {
  return {
    location: state.location,
  };
};

const mapDispatchToProps = {
  locationChange,
};

@connect(mapStateToProps, mapDispatchToProps)
class Routes extends Component {
  static propTypes = {
    location: PropTypes.string.isRequired,
    locationChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.locationChange('/chat');
    }, 2000);
  }

  render() {
    const { location } = this.props;
    console.log('routes', this.props);
    return location === '/gate' ? <Gate /> : <Chat />;
  }
}

export default Routes;

