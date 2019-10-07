import React from 'react';
import styled from 'styled-components';

import ImageCarousel from './imageCarousel';
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

    return (
        <Wrapper>
            <Section>
                <SectionTitle>{'How to:'}</SectionTitle>
                <SectionList>
                    <li>
                        <Span>{'Click on a thumbnail '}</Span>{'to copy it to your clipboard'}
                    </li>
                    <li>{'Go to a Mattermost server of your choice'}</li>
                    <li>
                        {'Navigate to the '}
                        <Span>{'Main Menu\'s Account Settings'}</Span>
                    </li>
                    <li>
                        {'Select '}
                        <Span>{'Display '}</Span>
                        {'and toggle the '}
                        <Span>{'Custom '}</Span>
                        {'button'}
                    </li>
                    <li>
                        <Span>{'Paste the theme '}</Span>
                        {'inside the text box and '}
                        <Span>{'Save'}</Span>
                    </li>
                </SectionList>
            </Section>
            <Section>
                <SectionTitle>{'Light Themes'}</SectionTitle>
                <ImageCarousel themes={lightThemes}/>
            </Section>

            <Section>
                <SectionTitle>{'Dark Themes'}</SectionTitle>
                <ImageCarousel themes={darkThemes}/>
            </Section>
        </Wrapper>
    );
}

export default Body;