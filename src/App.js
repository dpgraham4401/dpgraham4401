import Article from "./components/article";
import NavBtn from "./components/nav";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="min-vh-100 bg-dark">
      <NavBtn/>
      <Article/>
    </div>
  );
}

export default App;
