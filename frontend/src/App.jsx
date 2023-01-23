import React from 'react';
import {BrowserRouter as Router ,Link,Routes,Route} from 'react-router-dom';
import About from './compo/Header/About';
import Contact from './compo/Header/Contact';
import Home from './compo/Header/Home';
import Login from './compo/Header/Login';
import PostData from './compo/PostData/PostData';
import Message from './compo/Message';
import './App.css';
const App = () => {
  return (
    <Router>
        <div style={{backgroundColor:"#779BE9"}}>
        <div className='header'>
         <Link to='/'>Home</Link>
            <Link to='/about'>about</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/login'>login</Link>
            </div>
           <div className='mainBody'>
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
        </Routes>
            </div>
            <Message/> 
          <PostData />
          </div>
    </Router>
  )
}

export default App 