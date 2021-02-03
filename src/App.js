import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import HeaderNavbar from './components/header-navbar';
import Users from './pages/users';
import Repos from './pages/repos';

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 2rem 0;
`;

function App() {
  return (
    <Router>
      <HeaderNavbar />
      <Container>
        <Title>In this app you could find the registered users and created repositories of Github.</Title>
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
