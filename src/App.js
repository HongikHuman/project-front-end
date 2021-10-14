import './App.css';

import Navigationbar from './component/Navigationbar';
import Main from './component/Main';
import Top10_page from './pages/Top10_page';
import Footer from './component/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div className = "App">
        <Navigationbar />
        <Switch>
          <Route path="/top10" exact>
            <Top10_page />
          </Route>
          <Route path="/likes" exact>
            <h1>likes!</h1>
          </Route>

          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>

        <Footer />
      </div>

    </Router>
  );
}

