import React, {Component} from "react";

export default class Tweets extends Component {
    constructor(props) {
        super(props);
        this.state = {tweets: [], users: []}; 
    }

    componentDidMount() {
        this.TweetList();
        this.UserList();
    }

    TweetList() {
        fetch('http://157.245.160.185:8000/api/posts')
            .then(res => res.json())
            .then((data) => {
                this.setState({ tweets: data })
            })
            .catch(console.log);
    }

    UserList() {
        fetch('http://157.245.160.185:8000/api/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ users: data })
            })
            .catch(console.log);
    }

    render() {
        const tweets = this.state.tweets.map((item, i) => (
            <div>
                <div class="tweet_box">
                    <p>{item.tweet}</p>
                </div>
            </div>
        ));

        const users  = this.state.users.map((item, i) => (
            <div>
                <h2>{item.twitterhandle}</h2>
            </div>
       ))

        return (
            <div className="tweet">{ tweets }</div>
        )
    }
}
