import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './home/HomePage';
import Menu from './common/Menu';
import AboutPage from './about/AboutPage';
import TasksPage from './tasks/TasksPage';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Menu} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/tasks" component={TasksPage} />
    </div>
  </Router>
);

export default App;
