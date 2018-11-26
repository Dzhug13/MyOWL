import React, { Component } from "react";
import PropTypes from 'prop-types';
import { database } from "./firebase";

class NewBook extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      author: ""
    };

    this.bookRef = database.ref("/books");
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.bookRef.child(this.state.name).set({ name: this.state.name, author: this.state.author });
  }

  render() {
    const { name, author } = this.state;

    return (
      <form>
        <input
          type="text"
          value={name}
          placeholder="Name of New Book"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <input
          type="text"
          value={author}
          placeholder="Author of New Book"
          onChange={event => this.setState({ author: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>
          Submit
        </button>
      </form>
    );
  }
}

NewBook.propTypes = {
  booksRef: PropTypes.object
};

export default NewBook;
