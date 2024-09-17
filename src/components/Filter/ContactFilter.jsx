import PropTypes from "prop-types";

const ContactFilter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label htmlFor="text">
        <input id="text" type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
