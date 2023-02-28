import PropTypes from 'prop-types';

import ContactItem from '../ContactItem/ContactItem';
const List = ({ contacts, filter, deleteContact }) => {
  return (
    <ul>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            removeContact={deleteContact}
          />
        ))}
    </ul>
  );
};

export default List;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
