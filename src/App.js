import "./App.css";
import Navbar from "./components/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productdescscreen from "./screens/Productdescscreen";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path="/products" element={<Productdescscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
