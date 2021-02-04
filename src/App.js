import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { withRouter } from "react-router";

import HeaderNavbar from './components/header-navbar';
import Footer from './components/footer';
import Users from './pages/users';
import Repos from './pages/repos';
import UserDetails from './pages/user-details';
import RepoDetails from './pages/repo-details';

const HeaderWithRouter = withRouter(HeaderNavbar);

function App() {
  return (
    <Router>
      <HeaderWithRouter />
      <Container>
        <Switch>
          <Route exact path="/">
            <Redirect to="/users" />
          </Route>
          <Route exact path="/users" component={Users} />
          <Route exact path="/repos" component={Repos} />
          <Route exact path="/users/:id" component={UserDetails} />
          <Route exact path="/repos/:id" component={RepoDetails} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
