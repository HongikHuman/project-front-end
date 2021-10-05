import './App.css';

import Navigationbar from './component/Navigationbar';
import Header from './component/Header';
import Main from './component/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div className = "App">
        <Header />

        <Switch>
          <Route path="/likes">
            <h1>likes!</h1>
          </Route>

          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}