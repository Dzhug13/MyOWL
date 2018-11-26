/* eslint-disable */

import React, { Component } from "react";
import PropTypes from 'prop-types';
import Book from "./Book";
import map from "lodash/map";
import { database } from "./firebase";

class Books extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(key) {
    const currentUser = this.props.user;
    database
      .ref("/books")
      .child(key)
      .child("votes")
      .child(currentUser.uid)
      .set(currentUser.displayName);
  }

  handleDeselect(key) {
    const currentUser = this.props.user;
    database
      .ref("/books")
      .child(key)
      .child("votes")
      .child(currentUser.uid)
      .remove();
  }

  render() {
    const { user, books } = this.props;

    return (
      <section>
        {map(books, (book, key) => {
          return (
            <Book
              key={key}
              {...book}
              user={user}
              handleSelect={() => this.handleSelect(key)}
              handleDeselect={() => this.handleDeselect(key)}
            />
          );
        })}
      </section>
    );
  }
}

Books.propTypes = {
  user: PropTypes.object,
  booksRef: PropTypes.object,
  books: PropTypes.object
};

export default Books;
