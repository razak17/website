import * as React from 'react';
import { configs } from '../../config';
import { Button } from './Button';
import './Nav.css';

const { navLinks } = configs;

class Navbar extends React.Component {
  state = { menuClicked: false };

  handleMenuClicked = (): void =>
    this.setState({ menuClicked: !this.state.menuClicked });

  render(): JSX.Element {
    return (
      <nav className="nav-items">
        <h1 className="nav-logo">React</h1>
        <div className="menu-icon" onClick={this.handleMenuClicked}>
          <i
            className={this.state.menuClicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.menuClicked ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map(
            (item, index): JSX.Element => {
              return (
                <li key={index}>
                  <a
                    className={
                      item.name === 'Resume' ? 'nav-links-mobile' : 'nav-links'
                    }
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              );
            }
          )}
        </ul>
        <Button
          className="resume-button"
          type="submit"
          onClick={() => console.log('Hello')}
        >
          Resume
        </Button>
      </nav>
    );
  }
}

export default Navbar;
