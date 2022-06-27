import Article from "./components/article";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from "./components/topnav";
import Footer from "./components/footer";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faBars,
  faCoffee,
  faX,
} from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

library.add(fab, faCheckSquare, faX, faCoffee, faBars)

function App() {
  return (
    <>
      <Router>
        <TopNav/>
        <main className="bg-dark flex-fill p-5" role="main">
          <div>
            <Switch>
              <Route exact path="/">
                <Article/>
              </Route>
              <Route path="/blog">
              </Route>
              <Route path="/tutorials">
                <Article/>
              </Route>
            </Switch>
          </div>
        </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
