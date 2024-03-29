import Stats from './Stats.jsx';
import FeedbackOptions from './Feedback/FeedbackOptions.jsx';
import Sect from './Sect.jsx';
import { useState } from 'react';

const Count = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleFeedback = event => {
    switch (event.target.dataset.type) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }

    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Sect title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        ></FeedbackOptions>
      </Sect>
      <Sect title="Statistics">
        <Stats
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Stats>
      </Sect>
    </div>
  );
};

export default Count;
