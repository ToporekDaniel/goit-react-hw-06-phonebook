import PropTypes from 'prop-types';

export const NameInput = ({ onChange }) => {
  return (
    <label>
      Name
      <input
        onChange={onChange}
        type="text"
        name="name"
        pattern="^[a-z A-Z а-я А-Я]+(([' -][a-z A-Z а-я А-Я ])?[a-z A-Z а-я А-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

export const TelInput = ({ onChange }) => {
  return (
    <label>
      Number
      <input
        onChange={onChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
  );
};

NameInput.propTypes = {
  onChange: PropTypes.func,
};

TelInput.propTypes = {
  onChange: PropTypes.func,
};
