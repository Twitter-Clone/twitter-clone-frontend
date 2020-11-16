import React, { Component } from 'react';

import Home from './components/Home';
import Profile from './components/Profile';
import Following from './components/Following';
import Search from './components/Search';
import Feed from './components/middleware/Feed';


import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

import './css/main.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        displayed_form: '',
        logged_in: localStorage.getItem('token'),
        username: '',
        id: ''
      };
    }

  
    componentDidMount() {
      if (this.state.logged_in) {
        fetch('http://157.245.160.185:8000/tcapi/current_user/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(json => {
            this.setState({ username: json.username, id: json.id});
          });
      }
    }
  
    handle_login = (e, data) => {
      e.preventDefault();
      fetch('http://157.245.160.185:8000/token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          try {
            this.setState({
                logged_in: localStorage.getItem('token'),
                displayed_form: '',
                username: json.user.username
              });
          } catch(e) {
              console.log(e);
          }
        });
    };

    checkState(){
      console.log(this.state)
    }
  
    handle_signup = (e, data) => {
      e.preventDefault();
      fetch('http://157.245.160.185:8000/tcapi/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.username
          });
        });
    };
  
    handle_logout = () => {
      localStorage.removeItem('token');
      this.setState({ logged_in: false, username: '' });
    };
  
    display_form = form => {
      this.setState({
        displayed_form: form
      });
    };
  
    render() {
      let form;
      switch (this.state.displayed_form) {
        case 'login':
          form = <LoginForm handle_login={this.handle_login} />;

          break;
        case 'signup':
          form = <SignupForm handle_signup={this.handle_signup} />;
          break;
        default:
          form = null;
      }
      
      return (
        <div>
            <div className="App">
                <Nav
                logged_in={this.state.logged_in}
                display_form={this.display_form}
                handle_logout={this.handle_logout}
                />
                {form}
                <h3>
                {this.state.logged_in
                    // ? <Feed data={this.state} />
                    ? <Feed data={this.state} />
                    : console.log(false)}
                </h3>
            </div>
        </div>

      );
    }
  }
  
  export default App;

  