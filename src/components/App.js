import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './home/HomePage';
import Menu from './common/Menu';
import AboutPage from './about/AboutPage';
import TasksPage from './tasks/TasksPage';
import ManageTaskPage from './tasks/ManageTaskPage';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Menu} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/tasks" component={TasksPage} />
      <Route path="/task" component={ManageTaskPage} />
    </div>
  </Router>
);

export default App;
