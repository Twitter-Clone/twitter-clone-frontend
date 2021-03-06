import React, {Component} from 'react';

import Sidebar from '../components/Sidebar';
import Feed from './middleware/Feed';

export default class Profile extends Component {
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

    async componentDidMount() {
        await this.TweetList();
        await this.UserList();
    }

    async TweetList() {
        await fetch('http://157.245.160.185:8000/tcapi/api/posts/', {
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

    async UserList() {
        await fetch('http://157.245.160.185:8000/tcapi/api/users/', {
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

    // there was an a before increment?
    async increment() {
        // Attempting to fix the issue of no first tweets being sent
        this.setState({
            word: ''
        });

        this.setState({
            word: this.state.new,
            new: '',
        });
        
        this.newTweet = this.state.new;
        await this.sendToDatabase(this.newTweet);
    }
    
    async sendToDatabase(newTweet){

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
            await fetch('http://157.245.160.185:8000/tcapi/api/postnew/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${this.props.data["logged_in"]}`
                },
                body: JSON.stringify(newTweetObject)
            }) 
        } catch(e){
            console.log('This is from the fetch of sendToDatabase: ' + e);
        }

        // Reload page for new feed with added tweet
        window.location.reload(true);
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

    tweetsCurrentUser() {

        var currentUserTweets = [];
        
        var currentUserId = this.props.data["id"];

        for(var i = 0; i < this.state.tweets.length; i++){
            if(this.state.tweets[i].userid_id === currentUserId){
                currentUserTweets.push(this.state.tweets[i]);
            }
        }

        return currentUserTweets;
    }

    render() {

        var onOff = true;

        if(onOff){

            //var newArrayReversed = currentUserTweets.reverse();
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
                        {this.tweetsCurrentUser().reverse().map((item, index) => (    
                                <div class="single-tweet" key={index}>
                                    <h1>{this.findUsername(item.userid_id)}</h1>
                                    <p>{item.tweet}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        } else {
            return true;
        }
    }
}