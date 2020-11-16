import React, {Component} from 'react';

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

    sendToDatabase(newTweet){

        console.log(this.state.users);




        // get users ID
        // const find_username = this.props.data["username"];
        // getUserById = (id) => this.state.users.find(({ userid }) => userid === id);

        // // Create data object (postid, tweet, userid)
        // var newTweetObject = {
        //     "postid": postid,
        //     "tweet": newTweet,
        //     "userid_id": userid_id
        // }        

        // // Send object to the server
        // try {
        //     fetch('http://157.245.160.185:8000/tcapi/api/posts/', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `JWT ${this.props.data["logged_in"]}`
        //         },
        //         body: JSON.stringify(newTweetObject)
        //     }) 
        // } catch(e){
        //     console.log(e);
        // }
    }

    handleChange(value) {
        this.setState({
            new: value
        });
    }

    render() {

        const newArray = this.state.tweets.map(item => item.tweet);

        return (
            <div>
                <div>
                    <p>The message is: { this.state.word } </p>
                    <input type="text" value={this.state.new} onChange={(e) =>this.handleChange(e.target.value)} />
                    <input type="submit" value="Add Word" onClick={() => this.increment()} />
                </div>
                <div>
                    {newArray.map((item, index) => (    
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}