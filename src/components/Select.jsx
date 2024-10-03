import PropTypes from "prop-types";

const Select = ({
  label,
  id,
  name,
  value,
  onChange,
  options,
  defaultOption,
  error,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  defaultOption: PropTypes.string,
  error: PropTypes.string,
};

Select.defaultProps = {
  defaultOption: "",
  error: "",
};
export default Select;
