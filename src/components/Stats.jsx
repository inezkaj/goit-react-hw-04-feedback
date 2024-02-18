import PropTypes from 'prop-types';
import Notify from './Notify.jsx';

const Stats = ({ good, neutral, bad, total, positivePercentage }) => {
  return total > 0 ? (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage}%</p>
    </div>
  ) : (
    <Notify message="There is no feedback"></Notify>
  );
};

Stats.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Stats;
