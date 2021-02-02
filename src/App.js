import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HeaderNavbar from './components/header-navbar';

function App() {
  return (
    <Router>
      <HeaderNavbar />
      <div>
        <Switch>
          <Route path="/users">
            <p>Users page works</p>
          </Route>
          <Route path="/repos">
            <p>Repositories page works</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
