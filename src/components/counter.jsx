// import css from './counter.css';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedback_options';
import Section from './section';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.feedbackGiven = this.feedbackGiven.bind(this);
  }

  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
  };

  feedbackGiven(event) {
    this.setState({
      [event.target.dataset.type]:
        this.state[event.target.dataset.type] + this.props.step,
    });
  }

  countTotalFeedback() {
    return this.state.bad + this.state.neutral + this.state.good;
  }
  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.feedbackGiven}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
