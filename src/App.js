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
        <>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/repos">
              <Repos />
            </Route>
          </Switch>
        </>
      </Container>
    </Router>
  );
}

export default App;
