import React, { Component } from 'react';
import { auth, database } from "./firebase";
import CurrentUser from "./CurrentUser";
import SignIn from './SignIn';
import NewBook from './NewBook';
import Books from './Books';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      books: null
    };

    this.bookRef = database.ref("/books");
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });

      this.bookRef.on("value", snapshot => {
        this.setState({ books: snapshot.val() });
      });
    });
  }


  render() {
    const { currentUser, books } = this.state;

    return (
      <div className="App">
        <header>
        <h1>My Owl</h1>
        </header>
        <div>
          {!currentUser && <SignIn />}
          {currentUser && (
            <div>
              <NewBook />
              <Books books={books} user={currentUser} />
              <CurrentUser user={currentUser} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
