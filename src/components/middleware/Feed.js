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
        // this.UserList();
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

    // UserList() {
    //     fetch('http://157.245.160.185:8000/tcapi/current_user/')
    //     .then(res => res.json())
    //     .then((data) => {
    //         this.setState({ users: data })
    //     })
    //     .catch(console.log);
    // }

    getUserById = (id) => this.state.users.find(({ userid }) => userid === id);

    render() {
        // const tweets = this.state.tweets.map((item, i) => (
        //     <div>
        //         <div class="tweet_box">
        //             <h1>{this.getUserById(item.userid_id)?.twitterhandle}</h1>
        //             <p>{item.tweet}</p>
        //         </div>`
        //     </div>
        // ));

        const newArray = this.state.tweets.map(item => item.tweet);
        console.log(newArray);


        return (
            false
        )

        // return (
        //     <section id="feed">
        //         <div className="tweet">{ tweets }</div>
        //     </section>
        // )
    }
}