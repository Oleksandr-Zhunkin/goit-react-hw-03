import Contact from "../Contact/Contact";

export const ContactList = ({ getFilteredData, handleDeleteContact }) => {
  return (
    <div>
      <ul>
        {getFilteredData().map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
