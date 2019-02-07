import React from 'react'
import './footer.css'

const Footer = props => {
		return (
			<div className="Footer">
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Echo</h5>
                <p className="grey-text text-lighten-4">Share and care about your community.</p>
              </div>
              <div className="col l6 s12">
                <h5 className="white-text">Meet the team</h5>
                <p className="grey-text text-lighten-4">Share and care about your community.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Talk to us!</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            <strong>Echo</strong><a href="https://github.com/rsharar/BarterBorrow"> source code</a>. The source code is
                licensed 
                <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </div>
          </div>
        </footer>
			</div>
		)
}

export default Footer