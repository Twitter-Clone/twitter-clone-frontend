import React, {Component} from 'react';

import SearchBar from '../SearchBar';

export default class SearchMiddleware extends Component {
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

    GetTweetByUser() {
        var i = 0;
        var userTweet = [];

        for (i = 0; i < this.state.tweets.length; i++) {
            if (this.state.tweets[i].userid_id === 337282) {
                userTweet.push(this.state.tweets[i])
                console.log(this.state.tweets[i]);
            }

        }


        return userTweet;
    }

    getUserById = (id) => this.state.users.find(({ userid }) => userid === id);

    render() {
        const tweetList = this.GetTweetByUser();

        const tweets = tweetList.map((item, i) => (
            <div>
                <div class="tweet_box">
                    <h1>{this.getUserById(item.userid_id)?.twitterhandle}</h1>
                    <p>{item.tweet}</p>
                </div>
            </div>
        ))

        return (
            <section id="feed">
                <SearchBar />
                <div className="tweet">{ tweets }</div>
            </section>
        )
    }
}