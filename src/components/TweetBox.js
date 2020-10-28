"use strict";

import React from 'react';
import '../css/TweetBox.css';
import {Button} from "@material-ui/core";

function TweetBox(){
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <input placeholder="Type your next tweet..." type="text" />
                </div>
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
