import logo from "./logo.svg";
import "./App.css";
import Head from "./Head";
import Footer from './Footer';
import Welcome from './Welcome';

function App() {
  return (
    <>
      <Head />
      <Welcome name="Maria"/>
      <p className="App">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fugit
        iusto reiciendis quo officiis quibusdam doloribus eius quae, officia
        provident.
      </p>
      <Footer/>
      <Welcome name="Josef"/>
    </>
  );
}

export default App;
