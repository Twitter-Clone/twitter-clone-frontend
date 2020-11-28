import React, { Component } from 'react';


export default class LoginSignup extends Component {
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

    handle_signup = (e, data) => {

        e.preventDefault();
        fetch('http://157.245.160.185:8000/tcapi/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        }).then(res => res.json()).then(json => {
            localStorage.setItem('token', json.token);
            this.setState({
              logged_in: true,
              displayed_form: '',
              username: json.username
            });
          }).then(() => {window.location.reload(false)});
      };
    
      handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' , id: ''});
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
            <div class="container">
                <nav class="sidebar">
                    <Sidebar />
                    <div class="loginLinks">
                    <div class="loginText">
                        <Nav logged_in={this.state.logged_in} display_form={this.display_form} handle_logout={this.handle_logout} />
                    </div>
                    {form}
                    </div>
                </nav>
            </div>

}