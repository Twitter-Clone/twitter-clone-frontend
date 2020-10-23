import React, {Component} from "react";

// Tweets class to generate tweets with username and tweet.
export default class Tweets extends Component {
    constructor(props) {
        super(props);
        this.state = {tweets: [], users: []}; 
    }

    // instantiate the network request using both TweetList and UserList
    componentDidMount() {
        this.TweetList();
        this.UserList();
    }

    // Function to fetch posts api endpoint from our backend. Sets the tweets state.
    TweetList() {
        fetch('http://157.245.160.185:8000/api/posts')
            .then(res => res.json())
            .then((data) => {
                this.setState({ tweets: data })
            })
            .catch(console.log);
    }

    // Function to fetch users api endpoint from our backend. Sets the users state.
    UserList() {
        fetch('http://157.245.160.185:8000/api/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ users: data })
            })
            .catch(console.log);
    }

    /*
    1. - Take in ID.
    2. - Search all objects in users state.
    3. - Check if the userid key matches the id input and return it.
     */
    getUserById = (id) => this.state.users.find(({ userid }) => userid === id);

    // Render the Tweets component.
    render() {

        // Iterate through the tweets state, call the gitUserById function with ID, and output twitterhandle.
        const tweets = this.state.tweets.map((item, i) => (
            <div>
                <div class="tweet_box">
                    <h1>{this.getUserById(item.userid_id)?.twitterhandle}</h1>
                    <p>{item.tweet}</p>
                </div>
            </div>
        ));

        // Return the tweets variable from above and return it as a <div> with class tweet.
        return (
            <div className="tweet">{ tweets }</div>
        )
    }
}
