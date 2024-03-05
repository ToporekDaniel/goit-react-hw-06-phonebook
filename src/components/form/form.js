import styled from 'styled-components';
import { NameInput, TelInput } from './../input/inputs';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const SubmitButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const Form = styled.form``;

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleTelChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = nanoid();
    console.log(name, number, id);
    onSubmit({ id, name, number });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <NameInput onChange={handleNameChange} />
      <TelInput onChange={handleTelChange} />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
