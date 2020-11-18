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
                    
                        <script>document.getElementById('btn').onclick = function() {
                                // ? val = document.getElementById('imagename').value,
                                //src = 'https://assets.newatlas.com/dims4/default/572b515/2147483647/strip/true/crop/1620x1080+150+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fblue-whale-1.jpg',
                                //img = document.createElement('img')
                            }
                            img.src = src;
                            document.body.appendChild(img);
                        </script>
                        
                        <h1>
                            <a href="#" onClick={this.handleClick.bind(this)}>
                                Your Username Name
                            </a>{" "}
                        </h1>
                
            </OffCanvasMenu>
            </OffCanvas>
        )
    }

    handleClick()   {
        this.setState({ isMenuOpened: !this.state.isMenuOpened })
    }

}
