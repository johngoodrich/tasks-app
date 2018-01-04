import React from 'react';
import { Route, Link } from 'react-router-dom';

const NavBarLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link to={to}>{label}</Link>
      </li>
    )}
  />
);

const Menu = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/">
            Track Your Tasks
          </a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <NavBarLink activeOnlyWhenExact={true} to="/" label="Home" />
            <NavBarLink to="/tasks" label="Tasks" />
            <NavBarLink to="/about" label="About" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
