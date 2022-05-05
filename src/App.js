import React from 'react';
import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Hero from './components/Hero/Hero';
import Anime from './components/pages/Anime';

import { 
  BrowserRouter,
  Routes, 
  Route,
  NavLink
} from 'react-router-dom';
import Layout from './components/Layout';

class App extends React.Component {
  constructor(props){
     super(props);
     this.state = {}
  }
  render(){
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={
                <div>
                  <h1>Сайт <NavLink to="/anime">аниме</NavLink></h1>
                </div>
              } />
              <Route path="anime" element={<Hero />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="anime/:id" element={<Anime />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;