import './App.css';

import Navigationbar from './component/Navigationbar';
import Main from './component/Main';
import Top10_page from './pages/Top10_page';
import Univside from './pages/Univside';
import Hot_Posts from './pages/HotPosts';
import Footer from './component/Footer';
import Login from './pages/Login';
import IndiInfo from './pages/IndiInfo';

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
            <Hot_Posts />
          </Route>

          <Route path="/univside" exact>
            <Univside />
          </Route>

          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/newpost" exact>
            <h1 style={{fontSize: '50px', marginBottom: '150px'}}>새로운 게시글을 작성해보세요!</h1>
          </Route>
          <Route path="/likes" exact>
            <h1 style={{fontSize: '50px', marginBottom: '150px'}}>내가 찜한 목록</h1>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/my-page/history" exact>
            <h1 style={{fontSize: '50px', marginBottom: '150px'}}>나의 히스토리</h1>
          </Route>
          <Route path="/my-page/edit-privacy" exact>
            <IndiInfo/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

