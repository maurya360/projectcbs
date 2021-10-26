import React, { Component } from 'react'
import ProfileHeader from './ProfileHeader'

export default class DriverDetailAuto extends Component {
    render() {
        return (
            <div>
            <div class="jumbotron">
           
            
            <h1 class="display-4">Driver For Your Drive</h1>
            <p class="lead">Driver Information As Per Auto Driver....</p>
            <hr class="my-4"></hr>
            <p><h5>Driver name</h5></p>
            <p><h5>Licence number</h5></p>
            <p><h5>Contact Number</h5></p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">Confirm Your Trip </a>
            </p>
            </div>
            </div>
        )
    }
}
