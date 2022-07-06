import React from 'react'
import { Route, Link, Routes } from "react-router-dom";
import './css/styles.css'
import Header from './components/base/header'
import Footer from './components/base/footer'
import Main from './components/main'

export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
      <Routes>

        <Route path="/" component={Main} />
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};