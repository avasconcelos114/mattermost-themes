import React, {useState, useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import themes from './themes';
import {colors} from './utils';

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
        switch (filter) {
        case 'light':
            setThemes(themes.filter((theme) => theme.type === 'light'));
            break;
        case 'dark':
            setThemes(themes.filter((theme) => theme.type === 'dark'));
            break;
        default:
            setThemes(themes);
        }
    }, [filter]);

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
