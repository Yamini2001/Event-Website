import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Slider from './components/Slider';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home/>
            {/* <Slider/> */}
            {/* Other components can be added here */}
        </div>
    );
};

export default App;
