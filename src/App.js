import "./App.css";
import Navbar from "./components/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Route exact path="/" component={Homescreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
