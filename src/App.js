import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { withRouter } from "react-router";

import AppContext from './context/app-context';
import HeaderNavbar from './components/header-navbar';
import Footer from './components/footer';
import Users from './pages/search-users';
import Repos from './pages/search-repos';
import UserDetails from './pages/user-details';
import RepoDetails from './pages/repo-details';

const HeaderWithRouter = withRouter(HeaderNavbar);

const contextObj = {
  selectedUser: {},
  selectedRepo: {},
  criteria: ''
};

function App() {
  return (
    <Router>
      <HeaderWithRouter />
      <Container>
        <AppContext.Provider value={contextObj}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/users/search" />
            </Route>
            <Route exact path="/users/search" component={Users} />
            <Route exact path="/repos/search" component={Repos} />
            <Route exact path="/users/:id" component={UserDetails} />
            <Route exact path="/repos/:id" component={RepoDetails} />
          </Switch>
        </AppContext.Provider>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
