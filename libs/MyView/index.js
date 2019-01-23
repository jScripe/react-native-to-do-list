import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native'

class MyViewView extends Component {
  render () {
    return <MyView {...this.props} />
  }
}

MyViewView.propTypes = {
  openBrowserWithUrl: PropTypes.string
}

module.exports = requireNativeComponent('MyView', MyViewView)