import React, {Component} from 'react';

import '../../css/Feed.css'

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            users: [],
            word: '',
            new: ''
        }

        var newTweet = '';
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

    increment() {
        this.setState({
            word: this.state.new,
            new: '',
        })
        
        this.newTweet = this.state.new

        this.sendToDatabase(this.newTweet);
    }

    getUserId(username){
        for(var i = 0; i < this.state.users.length; i++){
            if(this.state.users[i].username === username){
                return this.state.users[i].id;
            }
        }
    }

    sendToDatabase(newTweet){

        // Get users ID
        const id = this.getUserId(this.props.data["username"]);

        // Generate a random postid
        var newPostId = Math.floor(Math.random() * Math.floor(10000))

        // Create data object (postid, tweet, userid)
        var newTweetObject = {
            "postid": newPostId,
            "tweet": newTweet,
            "userid_id": id
        }        

        // Send object to the server
        try {
            fetch('http://157.245.160.185:8000/tcapi/api/postnew/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${this.props.data["logged_in"]}`
                },
                body: JSON.stringify(newTweetObject)
            }) 
        } catch(e){
            console.log(e);
        }

        // Reload page for new feed with added tweet
        window.location.reload(false);
    }

    handleChange(value) {
        this.setState({
            new: value
        });
    }

    // findUsername = (id) => this.state.users.find(({ userid_id }) => userid_id === id);

    findUsername(_id){
        for(var i = 0; i < this.state.users.length; i++){
            if(this.state.users[i].id === _id){
                return this.state.users[i].username
            }
        }
    }

    render() {

        var newArray = null
        var newArrayReversed = []
        const onOff = true

        if(onOff){
            newArray = this.state.tweets.map(item => item)
            newArrayReversed = newArray.reverse();
        }

        if(onOff){
            return (
                <div>
                    <div class="tweetInput">
                        <center>
                            <textarea placeholder="Type your tweet..." rows="5" cols="50" value={this.state.new} onChange={(e) =>this.handleChange(e.target.value)}>Enter your tweet</textarea>
                        </center>
                        <input type="submit" value="Tweet" onClick={() => this.increment()} />
                    </div>
                    <div>
                        {newArrayReversed.map((item, index) => (    
                            <div class="single-tweet" key={index}>
                                <h1>{this.findUsername(item.userid_id)}</h1>
                                <p>{item.tweet}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        } else {
            return true;
        }
    }
}