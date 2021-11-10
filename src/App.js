
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer'
import Homepage from "./components/Homepage";
import About from './components/About'
import * as React from 'react'
import Navigation from "./components/Navigation";
import {Table} from "./components/Table";


const App = () => {
        return (
            <Router>
                <Navigation />
            <div className="container">
                    <Routes>
                    <Route path='/' element={<Homepage />}/>
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/table' element={<Table />} />
                    </Routes>
            </div>
                <Footer />
            </Router>

        );
}

export default App
