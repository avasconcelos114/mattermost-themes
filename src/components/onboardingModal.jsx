import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';

import {colors, hexToRgba, breakpoint} from '../utils';
import Carousel from './carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

OnboardingModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

// This line breaks tests but it's necessary for modal to function
// For now we're ignoring this only during unit tests
if (import.meta.env.MODE !== 'test') {
    Modal.setAppElement('#root');
}

const MAX_MODAL_WIDTH = 750;

const CarouselWrapper = styled.div`
    width: 100%;
    padding-bottom: 2rem;

    .slick-dots li button:before {
        color: #ffffff !important;
        opacity: 0.5;
    }

    .slick-dots li.slick-active button:before {
        color: #ffffff !important;
        opacity: 1;
    }
`;

const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
`;

const StepText = styled.p`
    color: ${colors.font};
    text-align: center;
    font-size: 3rem;

    strong {
        color: ${colors.fontHighlight}
    }
`;

const StepImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 20px;
`;

const StepImage = styled.img`
    display: block;
    width: 80%;
    max-width: 100%;
    height: auto;

    ${breakpoint('lg')`
        width: auto;
        max-width: 100%;
    `}
`;

const SkipModalButton = styled.p`
    display: flex;
    flex: 0;
    justify-content: flex-end;
    padding: 20px;
    margin: 0;
    cursor: pointer;
    color: ${colors.link};
    font-size: 1.8rem;
    background: rgba(0, 0, 0, 0.2);

    &:hover {
        color: ${hexToRgba(colors.link, 0.8)}
    }
`;

const modalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
    content: {
        padding: 0,
        border: 'none',
        background: colors.main,
        display: 'flex',
        flexDirection: 'column',
        width: '90vw',
        maxWidth: MAX_MODAL_WIDTH,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        overflow: 'visible',
    },
};

function OnboardingModal(props) {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            style={modalStyle}
        >
            <SkipModalButton onClick={props.closeModal}>{'Close tutorial'}</SkipModalButton>
            <CarouselWrapper>
                <Carousel isOnboarding={true}>
                    <StepWrapper>
                        <StepText>{'1. '}
                            <strong>{'Click on a thumbnail '}</strong>
                            {'to copy it to your clipboard.'}
                        </StepText>
                        <StepImageWrapper>
                            <StepImage
                                alt={'onboarding_1'}
                                src={`${import.meta.env.BASE_URL}img/onboarding/onboarding_1.png`}
                            />
                        </StepImageWrapper>
                    </StepWrapper>

                    <StepWrapper>
                        <StepText>
                            {'2. Navigate to your '}
                            <strong>{'account settings '}</strong>
                            {'on any Mattermost server.'}
                        </StepText>
                        <StepImageWrapper>
                            <StepImage
                                alt={'onboarding_2'}
                                src={`${import.meta.env.BASE_URL}img/onboarding/onboarding_2.png`}
                            />
                        </StepImageWrapper>
                    </StepWrapper>

                    <StepWrapper>
                        <StepText>
                            {'3. Go to the '}
                            <strong>{'Display menu, '}</strong>
                            {'and open the '}
                            <strong>{'Themes tab.'}</strong>
                        </StepText>
                        <StepImageWrapper>
                            <StepImage
                                alt={'onboarding_3'}
                                src={`${import.meta.env.BASE_URL}img/onboarding/onboarding_3.png`}
                            />
                        </StepImageWrapper>
                    </StepWrapper>

                    <StepWrapper>
                        <StepText>
                            {'4. Select '}
                            <strong>{'Custom Theme, '}</strong>
                            {'paste the selected theme '}
                            <strong>{'over the textbox, '}</strong>
                            {'and '}
                            <strong>{'save!'}</strong>
                        </StepText>
                        <StepImageWrapper>
                            <StepImage
                                alt={'onboarding_4'}
                                src={`${import.meta.env.BASE_URL}img/onboarding/onboarding_4.png`}
                            />
                        </StepImageWrapper>
                    </StepWrapper>
                </Carousel>
            </CarouselWrapper>
        </Modal>
    );
}

export default OnboardingModal;