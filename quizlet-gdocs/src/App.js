import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import { gapi } from 'gapi-script'


const clientId = "525844190311-0ufbalrpqp19s7r3gr4fub6alq2oounl.apps.googleusercontent.com"

function App() {
  useEffect(() => {
    const initClient = (() => {
        gapi.client.init({
            clientId: clientId,
            scope: ''
        })
    })
    gapi.load('client:auth2', initClient)
})

  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/about" element={<About />}>
      </Route>
    </Routes>
  );
}

export default App;
