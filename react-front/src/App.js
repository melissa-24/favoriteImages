import React from 'react'
import { Route, Routes } from "react-router-dom";
import './css/styles.css'
import Header from './components/base/header'
import Footer from './components/base/footer'
import Main from './components/main'

export default function App() {
  console.log("I am on app.js")
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        console.log("I am running inside main tag")
      <Routes>
        <Route path="/">
          <Main />
        </Route>
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};