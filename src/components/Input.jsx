import PropTypes from "prop-types";

const Input = ({ label, id, name, value, onChange, error }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Input.defaultProps = {
  error: "",
};
export default Input;
