import Article from "./components/article";
import NavBtn from "./components/topnav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <>
      <NavBtn/>
      <main className="bg-dark flex-fill" role="main">
        <Article/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
