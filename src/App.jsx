//import logo from './logo.svg';
import './App.scss';

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Jsx/layout';
import Home from './components/Jsx/home';
import About from './components/Jsx/about';
import Timeline from './components/Jsx/timeline';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout><Home /></Layout>}
        />
        <Route
          path="/about"
          element={<Layout><About /></Layout>}
        />
        <Route
          path="/timeline"
          element={<Layout><Timeline /></Layout>}
        />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
