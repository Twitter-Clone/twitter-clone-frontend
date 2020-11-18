"use strict";

import React, {Component} from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

import Sidebar from '../components/Sidebar';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:''
        }
    }
    
    componentWillMount() {
        this.setState({
            isMenuOpened: false
        })
    }

    componentDidMount() {
        
    }

    /*get_username() {
        var username = this.state.username;
        fetch('http://157.245.160.185:8000/tcapi/users/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username
            })
        }
    }*/
    
    render() {

        return (
            <OffCanvas
                width={100}
                transitionDuration={300}
                isMenuOpened={this.state.isMenuOpened}
                position={"left"}
                effect={"overlay"}
            >
            <OffCanvasBody 
                style={{ fontSize: "12px" }}
            >
                <h1>your_username</h1>
                <>
                    {/* <Sidebar /> */}
                    <h1>
                        <a href="#" onClick={this.handleClick.bind(this)}>
                            Profile
                        </a>{" "}
                    </h1>
                </>
            </OffCanvasBody>   
            <OffCanvasMenu>
                <p>your_username</p>
                    
                        {/* document.getElementById('btn').onclick = function() {
                            val = document.getElementById('imagename').value,
                            src = 'http://webpage.com/images/' + val +'.png',
                            img = document.createElement('img')
                        }
                        img.src = src;
                        document.body.appendChild(img);
                        
                        <h1>
                            <a href="#" onClick={this.handleClick.bind(this)}>
                                Your Username Name
                            </a>{" "}
                        </h1> */}
                
            </OffCanvasMenu>
            </OffCanvas>
        )
    }

    handleClick()   {
        this.setState({ isMenuOpened: !this.state.isMenuOpened })
    }

}