import PropTypes from 'prop-types';

const Sect = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Sect.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
export default Sect;
