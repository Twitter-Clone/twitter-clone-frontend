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

   
    GetUsername(prop) {
        this.state.user.map(function(users, i) {
            return <h1 key={id}>{users.twitterhandle}</h1>
        }
        
    }

    render() {
        const tweets = this.state.tweets.map((item, i) => (
            <div>
                <div class="tweet_box">
                    <h2>{this.GetUsername(item.userid_id)}</h2>
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
