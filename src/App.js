import React, {Component} from 'react';
import Users from './components/users';

    class App extends Component {

      /* A state is just an javascript object that holds any data that is waiting to be
      sent to the front end and rendered. It will hold our rendered JSON file from the 
      API server on DigitalOcean */ 
      state = {
        users: []
      }

      render () {
        return (
         <Users users={this.state.users} /> 
        )
      }

      componentDidMount() {
        fetch('http://157.245.160.185:8000/api/tcapi') // fetch the json file being served by our API
        .then(res => res.json()) // takes the data and ensures it is a JSON file and saved in the res (response) variable
        .then((data) => {
          this.setState({ users: data }) // fills in our state object from above with each entry from the JSON
        })
        .catch(console.log) // if there is an error, it prints the error to the browser console
      }
    }

    export default App;