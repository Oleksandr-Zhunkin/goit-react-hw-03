const Contact = ({ contact, handleDeleteContact }) => {
  return (
    <li>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button" onClick={() => handleDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
