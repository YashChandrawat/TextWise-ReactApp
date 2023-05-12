import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
// import { Route } from 'react-router';

function App() {

  //Default navbar mode is light
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#15202B';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}

      <Router>
        {/* Below we will pass the props   */}
        <Navbar title="TextWise" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route path="/"
            element={<TextForm heading="Try TextWise - Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
            <Route path="/about" element={<About about={"About"} mode={mode} />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
