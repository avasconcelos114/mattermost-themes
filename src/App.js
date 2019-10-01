import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
