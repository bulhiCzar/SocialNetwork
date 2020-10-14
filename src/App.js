import React from 'react'
import './App.css'
import Content from './components/content/profile/Content';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <div className='container'>
      <Header/>
      <Navbar/>
      <Content/>
    </div>
  )
}

export default App;
