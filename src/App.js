import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
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
