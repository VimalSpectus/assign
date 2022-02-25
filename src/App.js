import './App.css';
import FormInputs from './Components/FormInputs';
import DataShow from './Components/DataShow';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Weather from './Components/Weather';


function App() {
  return (
    <div>
    <Router>
    <Routes >
    <Route path="/" element={<FormInputs/>} />
    <Route path="/datashow" element={<DataShow/>} />
    {/* <Route path="/weather" element={<Weather/>} /> */}
    </Routes>
  </Router>
    </div>
  );
}

export default App;
