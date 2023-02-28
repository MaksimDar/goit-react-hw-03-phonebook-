import PropTypes from 'prop-types';
import { Item, Delete } from './ContactItem.styled';

const ContactItem = ({ id, name, number, removeContact }) => {
  return (
    <Item key={id}>
      {name}: {number}
      <Delete
        type="button"
        onClick={() => {
          removeContact(id);
        }}
      >
        Delete
      </Delete>
    </Item>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  removeContact: PropTypes.func,
};
