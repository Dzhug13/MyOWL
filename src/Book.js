/* eslint-disable */

import React, { Component } from "react";
import PropTypes from 'prop-types';
import map from "lodash/map";

class Book extends Component {
  render() {
    const { name, author, user, votes, handleDeselect, handleSelect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);

    return (
      <article>
        <h3>{name}</h3>
        <h5>{author}</h5>
        <ul>{votes && map(votes, (vote, key) => <li key={key}>{vote}</li>)}</ul>
        {userHasSelected ? (
          <button onClick={handleDeselect}>
            No, lost one
          </button>
        ) : (
          <button onClick={handleSelect}>Yes, I own it</button>
        )}
      </article>
    );
  }
}

Book.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Book;
