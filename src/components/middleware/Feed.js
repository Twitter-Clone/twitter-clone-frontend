import React, {Component} from 'react';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            users: []
        }
    }

    componentDidMount() {
        this.TweetList();
        this.UserList();
    }

    TweetList() {
        fetch('http://157.245.160.185:8000/tcapi/api/posts/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${this.props.data["logged_in"]}`
            }
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({ tweets: data })
        })
        .catch(console.log);
    }

    UserList() {
        fetch('http://157.245.160.185:8000/tcapi/api/users/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${this.props.data["logged_in"]}`
            }
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({ users: data })
        })
        .catch(console.log);
    }

    handleChange(){
        console.log('handleChange');
    }

    handleClick(){
        console.log('handleClick');
    }

    getUserById = (id) => this.state.users.find(({ userid }) => userid === id);

    render() {

        const newArray = this.state.tweets.map(item => item.tweet);

        return (
            <div>
                <div>
                    <input type="text" onChange={ this.handleChange } />
                    <input
                    type="button"
                    value="Alert the text input"
                    onClick={this.handleClick}
                    />
                </div>
                <div>
                    {newArray.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}