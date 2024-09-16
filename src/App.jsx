import { Component } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevstate) => ({
      contacts: [contact, ...prevstate.contacts],
    }));
  };

  render() {
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact}></ContactForm>

          <ContactList contacts={this.state.contacts}></ContactList>
        </Container>
      </>
    );
  }
}

export default App;
