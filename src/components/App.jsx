import { ContactList } from './list/list';
import { Filter } from './filter/filter';
import { ContactForm } from './form/form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from './redux/selectors';
import { addContact, deleteContact } from './redux/contactsSlice';
import { setFilter } from './redux/filterSlice';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  //
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts && storedContacts.length > 0) {
      console.log(storedContacts);
      storedContacts.forEach(contact => {
        dispatch(addContact(contact));
      });
    }
  }, [dispatch]);

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
    // setContacts(prevContacts => [...prevContacts, { id, name, number }]);
    dispatch(addContact({ id, name, number }));
  };

  const handleDelete = id => {
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== id)
    // );
    dispatch(deleteContact(id));
  };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter)
  // );

  const filteredContacts = contacts.filter(
    contact =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter)
  );

  const handleFilterChange = filterValue => {
    // setFilter(filterValue);
    dispatch(setFilter(filterValue));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} />
      <ContactList con={filteredContacts} onDelete={handleDelete} />
    </>
  );
};
