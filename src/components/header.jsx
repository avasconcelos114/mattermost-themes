import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import OnboardingModal from './onboardingModal';
import {colors, hexToRgba} from '../utils';

Header.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
background-color: ${colors.main};
display: flex;
flex-direction: row;
height: 60px;
align-items: center;
overflow-x: auto;
`;

const Title = styled.div`
display: flex;
flex-direction: row;
height: 100%;
justify-content: center;
align-items: center;
padding-left: 22px;

h3 {
    font-size: 2rem;
    margin: 0;
    font-weight: 300;
    color: ${colors.font};
}

span {
    font-weight: bold;
}
`;

const Filters = styled.ul`
display: flex;
flex: 1;
flex-direction: row;

li {
    padding: 0px 40px;
    list-style: none;
    font-size: 16px;
    color: ${colors.font};
    cursor: pointer;

    &:hover {
        color: ${hexToRgba(colors.font, 0.8)}
    }

    &:not(:last-child) {
        border-right: 1px solid ${colors.font};
    }
}
`;

const TutorialButton = styled.button`
margin-right: 22px;
border-radius: 4px;
font-size: 15px;
border: none;
background-color: ${colors.button};
color: #fff;
padding: 10px;
cursor: pointer;

&:hover {
    background-color: ${hexToRgba(colors.button, 0.8)};
}
`;

function Header(props) {
    const [isOnboardingModalOpen, setModal] = useState(false);

    // Show onboarding tutorial if user has never seen it
    useEffect(() => {
        const onboardingCompleted = localStorage.getItem('mmthemesOnboardingCompleted');
        if (!onboardingCompleted) {
            setModal(true);
        }
    });

    const closeModal = () => {
        localStorage.setItem('mmthemesOnboardingCompleted', 'true');
        setModal(false);
    };

    const openModal = () => {
        localStorage.removeItem('mmthemesOnboardingCompleted');
        setModal(true);
    };
    return (
        <Wrapper>
            <OnboardingModal
                isModalOpen={isOnboardingModalOpen}
                closeModal={closeModal}
                contentLabel={'How To'}
            />
            <Title>
                <h3>
                    <span>{'Mattermost '}</span>
                    {'Themes'}
                </h3>
            </Title>
            <Filters>
                <li
                    onClick={() => props.setFilter('all')}
                    style={props.filter === 'all' ? {fontWeight: 'bold'} : null}
                >
                    {'All'}
                </li>
                <li
                    onClick={() => props.setFilter('light')}
                    style={props.filter === 'light' ? {fontWeight: 'bold'} : null}
                >
                    {'Light'}
                </li>
                <li
                    onClick={() => props.setFilter('dark')}
                    style={props.filter === 'dark' ? {fontWeight: 'bold'} : null}
                >
                    {'Dark'}
                </li>
            </Filters>
            <TutorialButton onClick={openModal}>{'View tutorial'}</TutorialButton>
        </Wrapper>
    );
}

export default Header;