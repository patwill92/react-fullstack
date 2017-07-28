import React from 'react';
import createReactClass from 'create-react-class';
import { Link } from 'react-router-dom';

var Navbar = createReactClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">PAT</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/" >Profile</Link></li>
              <li><Link to="/signin" >Sign In</Link></li>
              <li><Link to="/signup" >Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});

export default Navbar;