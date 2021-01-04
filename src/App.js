import { Router, Route, Switch } from 'react-router-dom';
// -- MY IMPORTS -- //


import FrontPage from './pages/FrontPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'

import history from './history'

const App = () => {
  return (
    <div className="app">

      <Router history={history}>
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/about" exact component={AboutPage} />
          {/* <Route path="/contact" component={ContactPage} /> */}
          <Route path="/resume" exact component={ResumePage} />

        </Switch>
      </Router>

    </div>




  );
}

export default App;
