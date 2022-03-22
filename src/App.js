import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
}from 'react-router-dom'
import Start from './components/start/startView'
import Result from './components/result/resultView'
import Translation from './components/translation/translationView'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div class = "container">
          <div class = "row">
            <div class = "col">
              <div class="card text-center">
                <div class="card-body">

                <Routes>

                  <Route path="/" element={ <Start/> } />
                  <Route path="/translation" element={ <Translation/> } />
                  <Route path="/result" element={ <Result/> } />

                </Routes>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
