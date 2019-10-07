import React from 'react';
import styled from 'styled-components';

import Carousel from './carousel';

import themes from '../themes';

function Body() {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        color: #fff;
    `;

    const Section = styled.div`
        margin-top: 2rem;
    `;

    const SectionTitle = styled.h3`
        font-weight: 400;
        text-indent: 2rem;
        font-size: 2.3rem;
    `;

    const SectionList = styled.ol`
        line-height: 1.5;
        padding-inline-start: 2rem;
        margin-left: 2rem;
    `;

    const Span = styled.span`
        font-weight: bold;
    `;

    const lightThemes = [];
    const darkThemes = [];
    themes.forEach((theme) => {
        if (theme.type === 'light') {
            lightThemes.push(theme);
        } else {
            darkThemes.push(theme);
        }
    });

    // Check whether user already completed onboarding
    const onboardingCompleted = localStorage.getItem('mmthemesOnboardingCompleted');
    if (!onboardingCompleted) {
        // show modal
    }

    return (
        <Wrapper>
            <Section>
                <SectionTitle>{'Light Themes'}</SectionTitle>
                <Carousel themes={lightThemes}/>
            </Section>

            <Section>
                <SectionTitle>{'Dark Themes'}</SectionTitle>
                <Carousel themes={darkThemes}/>
            </Section>
        </Wrapper>
    );
}

export default Body;