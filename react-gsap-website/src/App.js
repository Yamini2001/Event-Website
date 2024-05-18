import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home/>
            {/* Other components can be added here */}
        </div>
    );
};

export default App;
