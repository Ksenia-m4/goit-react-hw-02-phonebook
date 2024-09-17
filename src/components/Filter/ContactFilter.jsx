import PropTypes from "prop-types";

import "./ContactFilter.css";

const ContactFilter = ({ value, onChange }) => {
  return (
    <div className="Filter">
      <label htmlFor="text" className="filter-input">
        Find contacts by name
      </label>
      <input id="text" type="text" value={value} onChange={onChange} />
    </div>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
