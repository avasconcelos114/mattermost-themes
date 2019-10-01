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
    
    `;

    const SectionTitle = styled.h3`
    
    `;

    return (
        <Wrapper>
            <Section>
                <SectionTitle>How to:</SectionTitle>
            </Section>

            <Section>
                <SectionTitle>Themes</SectionTitle>
                <ImageCarousel themes={themes}/>
            </Section>
        </Wrapper>
    );
}

export default Body;