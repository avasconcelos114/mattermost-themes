import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Power3, TweenLite} from 'gsap';
import {hexToRgba} from '../utils';

Thumbnail.propTypes = {
    theme: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
};

function Thumbnail(props) {
    const copyTextRef = React.createRef();
    const overlayRef = React.createRef();
    const thumbnailRef = React.createRef();

    useEffect(() => {
        if (props.index) {
            setTimeout(() => {
                TweenLite.to(thumbnailRef.current, 0, {width: '100%', ease: Power3.easeOut});
                TweenLite.to(thumbnailRef.current, 0, {height: '33rem', ease: Power3.easeOut});
            }, props.index * 70);
        }
    }, []);

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 1.2rem;
        width: 0%;
        height: 0%;
        overflow: hidden;
        box-shadow: 1px 6px 20px rgba(0,0,0,0.35);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    `;

    const ThemeTitleContainer = styled.div`
        display: flex;
        width: 100%;
        height: 3rem;
        justify-content: center;
        align-items: center;
        background: ${props.theme.sidebarBg};
    `;

    const ThemeTitle = styled.p`
        color: ${props.theme.sidebarText};
    `;

    const Image = styled.div`
        background: url(${process.env.PUBLIC_URL}/img/${props.image});
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
        width: 100%;
        height: 30rem;
    `;

    const ImageOverlay = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        opacity: 0;
        justify-content: center;
        align-items: center;
        background: ${hexToRgba(props.theme.sidebarBg, 0.8)};

        span {
            font-size: 2rem;
            color: ${props.theme.sidebarText};
        }
    `;

    function copyToClipboard() {
        let style = JSON.stringify(props.theme);
        style = style.replace(' ', '');
        style = style.replace('\n', '');

        // Create textarea element and append to body
        const textarea = document.createElement('textarea');
        textarea.value = style;
        textarea.readOnly = true;
        document.body.appendChild(textarea);

        // Select textarea and copy contents
        textarea.select();
        document.execCommand('copy');

        // Remove from body and notify completion
        document.body.removeChild(textarea);
        copyTextRef.current.innerHTML = 'Copied!';
    }

    function onMouseleave() {
        TweenLite.to(overlayRef.current, 0.25, {css: {opacity: 0}, ease: Power3.easeOut}).play();
    }

    function onMouseEnter() {
        copyTextRef.current.innerHTML = 'Copy style';
        TweenLite.to(overlayRef.current, 0.25, {css: {opacity: 1}, ease: Power3.easeOut}).play();
    }

    return (
        <Wrapper
            ref={thumbnailRef}
            onClick={copyToClipboard}
        >
            <ThemeTitleContainer>
                <ThemeTitle>{props.name}</ThemeTitle>
            </ThemeTitleContainer>
            <Image>
                <ImageOverlay
                    ref={overlayRef}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseleave}
                >
                    <span ref={copyTextRef}>{'Copy style'}</span>
                </ImageOverlay>
            </Image>
        </Wrapper>
    );
}

export default Thumbnail;