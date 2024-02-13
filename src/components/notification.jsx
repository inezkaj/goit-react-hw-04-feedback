import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}
Notification.propTypes = {
  message: PropTypes.string,
};
