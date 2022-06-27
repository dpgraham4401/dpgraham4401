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

library.add(fab, faCheckSquare, faX, faCoffee, faBars)

function App() {
  return (
    <>
      <TopNav/>
      <main className="bg-dark flex-fill p-5" role="main">
        <Article/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
