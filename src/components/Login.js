import React, { Component } from 'react';
import Nav from './Nav';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        displayed_form: '',
        logged_in: localStorage.getItem('token') ? true : false,
        email: ''
      };
    }
  
    // http://157.245.160.185:8000/api/users/
    componentDidMount() {
      if (this.state.logged_in) {
        fetch('http://157.245.160.185:8000/api/current_user/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(json => {
            this.setState({ email: json.email });
          });
      }
    }
  
    handle_login = (e, data) => {
      e.preventDefault();
      fetch('http://localhost:8000/token-auth/', {
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
            email: json.user.email
          });
        });
    };
  
    handle_signup = (e, data) => {
      e.preventDefault();
      fetch('http://157.245.160.185:8000/api/users/', {
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
            email: json.email
          });
        });
    };
  
    handle_logout = () => {
      localStorage.removeItem('token');
      this.setState({ logged_in: false, email: '' });
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
        <div className="App">
            <Nav
            logged_in={this.state.logged_in}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
            />
            {form}
            <h3>
            {this.state.logged_in
                ? `Hello, ${this.state.email}`
                : 'Please Log In'}
            </h3>
        </div>
      );
    }
  }
  
  export default Login;
  