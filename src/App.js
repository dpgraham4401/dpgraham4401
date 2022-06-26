import Article from "./components/article";
import NavBtn from "./components/topnav";
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <NavBtn/>
      <main className="bg-dark flex-fill p-5" role="main">
        <Article/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
