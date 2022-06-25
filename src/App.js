import Article from "./components/article";
import NavBtn from "./components/topnav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";

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
