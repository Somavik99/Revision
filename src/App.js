import Card from "./Components/Card/Card";
import HomePage from "./Components/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import Update from "./Components/Update/Update";
function App() {
  return (
    <div className="App">
      <h1> Hello, Welcome to CRUD Operation</h1>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Cards" element={<Card />} />
        <Route exact path="/update" element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
