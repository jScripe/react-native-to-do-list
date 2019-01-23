import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native'

class MyViewView extends Component {
  render () {
    return <RNRnMyView {...this.props} />
  }
}

MyViewView.propTypes = {
  openBrowserWithUrl: PropTypes.string
}

module.exports = requireNativeComponent('RNRnMyView', MyViewView)



// import { NativeModules } from 'react-native';

// const { RNRnMyView } = NativeModules;

// export default RNRnMyView;
