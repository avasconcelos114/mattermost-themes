import React, {useState, useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import themes from './themes';
import {colors} from './utils';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        background-color: ${colors.background};
    }

    .slick-dots li button:before {
        color: #d6dad9 !important;
    }

    .slick-dots li.slick-active button:before {
        color: #d6dad9 !important;
    }
`;

function App() {
    // Possible values: 'all', 'light', 'dark'
    const [filter, setFilter] = useState('all');
    const [themeList, setThemes] = useState([]);

    useEffect(() => {
        getThemes();
    }, [filter]);

    function getThemes() {
        let filteredThemes;
        switch (filter) {
        case 'light':
            filteredThemes = themes.filter((theme) => {
                return theme.type === 'light';
            });
            setThemes(filteredThemes);
            break;
        case 'dark':
            filteredThemes = themes.filter((theme) => {
                return theme.type === 'dark';
            });
            setThemes(filteredThemes);
            break;
        default:
            setThemes(themes);
        }
    }

    return (
        <div>
            <GlobalStyle/>
            <Header
                filter={filter}
                setFilter={setFilter}
            />
            <Body themeList={themeList}/>
            <Footer/>
        </div>
    );
}

export default App;
