import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, clickEvent } = this.props;
    return (
      <button
        type="button"
        className={this.props.className}
        value={value}
        onClick={clickEvent}
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
