import React from 'react';
import './App.css';
// @ts-ignore
import Header from "../header/Header";
import AuthorizedPage from "../../pages/AuthorizedPage/AuthorizedPage";
function App() {
  return (
    <div className="App">
        <Header/>
        <AuthorizedPage/>
    </div>
  );
}

export default App;
