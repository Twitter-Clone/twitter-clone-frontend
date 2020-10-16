import React, { Component } from 'react';
import Contacts from './components/contacts'; // import our contacts component.

    class App extends Component {
      // API State - an object that holds data pending to be rendered. This is where we will store the output from the API call.
      state = {
        contacts: []
      }

      // Call the api - using componentDidMount() method. 
      componentDidMount() {
        fetch('http://157.245.160.185:8000/api/tcapi') // Makes a GET request to the endpoint.
        .then(res => res.json()) // parses the output to JSON.
        .then((data) => {
          this.setState({ contacts: data }) // Sets the value of our state to the output from the API call
        })
        .catch(console.log) // Logs any error we get to the console.
      }

      render() {
        return (
          <Contacts contacts={this.state.contacts} />
        );
      }
    }

    export default App;
