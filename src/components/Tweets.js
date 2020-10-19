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
                <h1>{item.userid_id}</h1>
                <h2>{item.tweet}</h2>
            </div>
        ));

        const users  = this.state.users.map((item, i) => (
            <div>
                <h2>{item.twitterhandle}</h2>
            </div>
        ))

        return (
            <div>
                <div className="twitterhandle">{ users[0] }</div>
                    <div className="tweet">{ tweets[0] }</div>
                <br />
                <div className="">{ users }</div>
            </div>
        )
    }
}
