import React, {Component} from 'react';

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

    getUserById = (id) => this.state.users.find(({ userid }) => userid === id);

    render() {
        const tweets = this.state.tweets.map((item, i) => (
            <div>
                <div class="tweet_box">
                    <h1>{this.getUserById(item.userid_id)?.twitterhandle}</h1>
                    <p>{item.tweet}</p>
                </div>
            </div>
        ));

        var i = 0;

        while(tweets.length > i){
            if(tweets[i].userid_id === '383827'){
                console.log(tweets[i])
            }

            i++;
        }

        return (
            <section id="feed">
                <div className="tweet">{ tweets }</div>
            </section>
        )
    }
}