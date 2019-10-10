import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Carousel from './carousel';
import Thumbnail from './thumbnail';
import OnboardingModal from './onboardingModal';

import themes from '../themes';

function Body() {
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

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
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

    const TutorialButton = styled.button`
        margin-left: 2rem;
        border-radius: 4px;
        border: none;
        background-color: #12d7e6;
        padding: 10px;
        cursor: pointer;

        &:hover {
            background-color: #3ce3f0;
        }
    `;

    const lightThemes = [];
    const darkThemes = [];
    themes.forEach((theme) => {
        const thumbnail = (
            <Thumbnail
                key={theme.name}
                name={theme.name}
                image={theme.thumbnailUrl}
                theme={theme.theme}
            />
        );

        if (theme.type === 'light') {
            lightThemes.push(thumbnail);
        } else {
            darkThemes.push(thumbnail);
        }
    });

    return (
        <Wrapper>
            <OnboardingModal
                isModalOpen={isOnboardingModalOpen}
                closeModal={closeModal}
                contentLabel={'How To'}
            />
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

                <TutorialButton onClick={openModal}>{'View detailed tutorial'}</TutorialButton>
            </Section>

            <Section>
                <SectionTitle>{'Light Themes'}</SectionTitle>
                <Carousel>{lightThemes}</Carousel>
            </Section>

            <Section>
                <SectionTitle>{'Dark Themes'}</SectionTitle>
                <Carousel>{darkThemes}</Carousel>
            </Section>
        </Wrapper>
    );
}

export default Body;