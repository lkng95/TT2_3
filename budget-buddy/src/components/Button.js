import PropTypes from "prop-types";

function Button({ color, text, onClick, disabled }) {
  const btnColor = disabled ? "grey" : color;
  return (
    <button
      className="btn"
      style={{ backgroundColor: btnColor }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
  text: "Button",
  disabled: false,
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
