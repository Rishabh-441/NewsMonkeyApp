import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark text-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; {new Date().getFullYear()} News App. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-right">
              <p>Contact us: info@newsapp.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
