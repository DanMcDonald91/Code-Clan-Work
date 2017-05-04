import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Pricing from './Pricing'
import Contact from './Contact'
import {Link} from 'react-router'

class Main extends Component {
  

  render() {
    const child = this.pageComponent()
    return (
      <div>
        <h4>Main App</h4>
        <ul>
          <li><link to="home">Home</link></li>
          <li><link to="about">About</link></li>
          <li><link to="pricing">Pricing</link></li>
          <li><link to="contact">Contact</link></li>
          
        </ul>
        
      </div>
    )
  }


}


export default Main
