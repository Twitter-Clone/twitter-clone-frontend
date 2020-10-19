import React, {Component} from "react";

export default class Tweets extends Component {
    constructor(props) {
        super(props);
        this.state = {tweets: []};
    }

    componentDidMount() {
        this.TweetList();
    }

    TweetList() {
        fetch('http://0.0.0.0:8000/api/posts')
            .then(res => res.json())
            .then((data) => {
                this.setState({ tweets: data })
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

        return (
            <div className="">{ tweets }</div>
        )
    }
}
