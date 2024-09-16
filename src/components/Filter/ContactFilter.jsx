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

export default ContactFilter;
