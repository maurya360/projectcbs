import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class ProfileHeader extends Component {
    render() {

        return (
           
            <div id="index.html" class="header_section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="logo"><a href="index.html"><img src="images/logo.png"  alt="img"/></a></div>
                        </div>
                        <div class="col-sm-6 col-lg-9">
                            <div class="menu_text">
                                <ul>
                                    <li><Link to="/banner">Home</Link></li>                                                    
                                    <li><Link to="/about">About</Link></li>
                                    <li><a href="#taxis">Profile</a></li>
                                    <li><a href="#booking">Booking</a></li>
                                    <li><a href="#contact">Contact Us</a></li>
                                    <li><a href="#contact" class="btn btn-default btn-sm">Logout</a></li>
                                
                        
                                </ul>
                            </div>
                    </div>
                    </div>
                    </div>

                    

           </div> 

           
      
            
        )
    }
}
