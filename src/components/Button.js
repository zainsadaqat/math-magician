import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      type="button"
      className={props.className}
      value={props.value}
      onClick={props.clickEvent}
    >
      {props.value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
