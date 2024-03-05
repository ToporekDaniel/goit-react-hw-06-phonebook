import { ContactList } from './list/list';
import { Filter } from './filter/filter';
import { ContactForm } from './form/form';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const App = () => {
  const [contacts, setContacts] = useState([
    //działa wszystko poza localStorage gdy mam podane domyślne ustawienia
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts && storedContacts.length > 0) {
      console.log(storedContacts);
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ id, name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, { id, name, number }]);
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleFilterChange = filterValue => {
    setFilter(filterValue);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </>
  );
};

App.propTypes = {
  filter: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleDelete: PropTypes.func,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  handleFilterChange: PropTypes.func,
};
