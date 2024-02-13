import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from './notification';

export default class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    return this.props.total > 0 ? (
      <div>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total:{this.props.total}</p>
        <p>Positive feedback:{this.props.positivePercentage}%</p>
      </div>
    ) : (
      <Notification message="There is no feedback"></Notification>
    );
  }
}
