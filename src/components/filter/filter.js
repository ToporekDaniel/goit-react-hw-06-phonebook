import PropTypes from 'prop-types';

export const Filter = ({ onFilterChange }) => {
  const handleInputChange = event => {
    const inputValue = event.target.value.toLowerCase();
    onFilterChange(inputValue);
  };
  return (
    <label>
      Find contacts by name
      <input
        onChange={handleInputChange}
        type="text"
        name="name"
        pattern="^[a-z A-Z а-я А-Я]+(([' -][a-z A-Z а-я А-Я ])?[a-z A-Z а-я А-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};
