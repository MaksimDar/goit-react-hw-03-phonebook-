import PropTypes from 'prop-types';
import { FilterHeader, FilterLabel } from './Filter.styled';

const Filter = ({ ChangeContact }) => {
  return (
    <FilterLabel htmlFor="filter">
      <FilterHeader>Find contacts by name</FilterHeader>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={ChangeContact}
        required
      />
    </FilterLabel>
  );
};
export default Filter;

Filter.propTypes = {
  ChangeContact: PropTypes.func,
};
