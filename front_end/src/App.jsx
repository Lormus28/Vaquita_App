import "./App.css";
import RoutesFile from "./routesFile";
import NavBar from "./components/layout/navbar/NavBar";

function App() {
  return (
    <>
      <div id="content">
        <NavBar />
        <RoutesFile />
      </div>
    </>
  );
}

export default App;

//Create validations for group name