import PropTypes from 'prop-types';

const Notify = ({ message }) => {
  return <p>{message}</p>;
};

Notify.propTypes = {
  message: PropTypes.string,
};

export default Notify;
