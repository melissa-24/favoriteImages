import React from 'react'
import { Route, Routes } from "react-router-dom";
import './css/styles.css'

import Main from './components/main'

import Express from './components/express'
import ExpressDash from './components/express/dashboard'
import ExpressNasa from './components/express/nasa'
import ExpressTunes from './components/express/tunes'
import ExpressUser from './components/express/users'

import Java from './components/java'
import JavaDash from './components/java/dashboard'
import JavaNasa from './components/java/nasa'
import JavaTunes from './components/java/tunes'
import JavaUser from './components/java/users'

import Flask from './components/flask'
import FlaskDash from './components/flask/dashboard'
import FlaskNasa from './components/flask/nasa'
import FlaskTunes from './components/flask/tunes'
import FlaskUser from './components/flask/users'

import Django from './components/django'
import DjangoDash from './components/django/dashboard'
import DjangoNasa from './components/django/nasa'
import DjangoTunes from './components/django/tunes'
import DjangoUser from './components/django/users'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/express' element={<Express />} />
        <Route path='/express/dashboard' element={<ExpressDash />} />
        <Route path='/express/nasa' element={<ExpressNasa />} />
        <Route path='/express/tunes' element={<ExpressTunes />} />
        <Route path='/express/users' element={<ExpressUser />} />
        <Route path='/django' element={<Django />} />
        <Route path='/django/dashboard' element={<DjangoDash />} />
        <Route path='/django/nasa' element={<DjangoNasa />} />
        <Route path='/django/tunes' element={<DjangoTunes />} />
        <Route path='/django/users' element={<DjangoUser />} />
        <Route path='/flask' element={<Flask />} />
        <Route path='/flask/dashboard' element={<FlaskDash />} />
        <Route path='/flask/nasa' element={<FlaskNasa />} />
        <Route path='/flask/tunes' element={<FlaskTunes />} />
        <Route path='/flask/users' element={<FlaskUser />} />
        <Route path='/java' element={<Java />} />
        <Route path='/java/dashboard' element={<JavaDash />} />
        <Route path='/java/nasa' element={<JavaNasa />} />
        <Route path='/java/tunes' element={<JavaTunes />} />
        <Route path='/java/users' element={<JavaUser />} />
        <Route exact path='/' element={<Main />} />
      </Routes> 
    </div>
  );
};