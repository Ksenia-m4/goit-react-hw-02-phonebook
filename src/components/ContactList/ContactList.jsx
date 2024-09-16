const ContactList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((item) => (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
