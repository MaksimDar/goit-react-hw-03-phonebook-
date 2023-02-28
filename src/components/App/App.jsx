import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import List from '../List/List';
import { InputHeader } from './App.styled';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChangeInput = evt => {
    const targetInput = evt.currentTarget;
    this.setState({ [targetInput.name]: targetInput.value });
  };
  handleFilterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  addContacts = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;

    this.setState(({ contacts }) => {
      const contactName = name.value;
      if (this.checkContact(contactName)) {
        alert(`${contactName} name is already in contacts`);
        return;
      }
      const newContact = {
        id: nanoid(),
        name: name.value,
        number: number.value,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };
  checkContact = contactName => {
    const foundContact = this.state.contacts.find(
      contact => contact.name === contactName
    );
    return foundContact;
  };
  removeItem = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { number } = this.state.contacts;
    return (
      <>
        <InputHeader>PhoneBook</InputHeader>
        <Form
          name={this.state.contacts.name}
          number={number}
          addContacts={this.addContacts}
          handleInputChange={this.handleChangeInput}
        />
        <InputHeader>Contacts</InputHeader>
        <Filter value={filter} ChangeContact={this.handleFilterChange} />
        <List
          filter={filter}
          contacts={contacts}
          deleteContact={this.removeItem}
        />
      </>
    );
  }
}
export default App;
