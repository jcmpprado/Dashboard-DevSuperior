import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Table from "./components/Table";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary"> Olá mundo!</h1>
        <Table />
      </div>
      <Footer />
    </>
  );
}

export default App;
