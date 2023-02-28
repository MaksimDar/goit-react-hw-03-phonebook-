import { ContactForm, Label, Span, AddContactButton } from './Form.styled';
import PropTypes from 'prop-types';
const Form = ({ name, number, addContacts, handleInputChange }) => {
  return (
    <ContactForm onSubmit={addContacts}>
      <Label htmlFor="name">
        <Span>Name</Span>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInputChange}
          required
        />
      </Label>
      <Label htmlFor="number">
        <Span>Number</Span>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInputChange}
          required
        />
      </Label>
      <AddContactButton>Add contact</AddContactButton>
    </ContactForm>
  );
};
export default Form;

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  addContacts: PropTypes.func,
  handleInputChange: PropTypes.func,
};
