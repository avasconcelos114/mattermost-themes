import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import {createGlobalStyle} from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        background-color: #181F29;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

export default App;
