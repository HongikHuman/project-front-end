import './App.css';

import Navigationbar from './component/Navigationbar';
import Main from './component/Main';
import Top10_page from './pages/Top10_page';
import Univside from './pages/Univside';
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
          <Route path="/univside" exact>
            <Univside />
          </Route>
          <Route path="/top10" exact>
            <Top10_page />
          </Route>
          <Route path="/hotpost" exact>
            <h1>hot 게시판</h1>
          </Route>

          <Route path="/univside" exact>
            <Univside />
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

