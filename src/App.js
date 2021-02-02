import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HeaderNavbar from './components/header-navbar';
import Users from './pages/users';
import Repos from './pages/repos';

function App() {
  return (
    <Router>
      <HeaderNavbar />
      <Container>
        <h3>In this app you could find the registered users and created repositories of Github</h3>
        <div>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/repos">
              <Repos />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
