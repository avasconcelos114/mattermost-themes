import React from 'react';
import styled from 'styled-components';

import ImageCarousel from './imageCarousel';
import themes from '../themes';

function Body() {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #515151;
    `;

    const Section = styled.div`
        padding: 20px;
    `;

    const SectionTitle = styled.h3`
        font-weight: 500;
    `;

    const lightThemes = [];
    const darkThemes = [];
    themes.forEach(theme => {
        theme.type === 'light' ? lightThemes.push(theme) : darkThemes.push(theme);
    });

    return (
        <Wrapper>
            <Section>
                <SectionTitle>How to:</SectionTitle>
            </Section>

            <Section>
                <SectionTitle>Light Themes</SectionTitle>
                <ImageCarousel themes={lightThemes}/>
            </Section>

            <Section>
                <SectionTitle>Dark Themes</SectionTitle>
                <ImageCarousel themes={darkThemes}/>
            </Section>
        </Wrapper>
    );
}

export default Body;