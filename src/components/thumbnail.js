import React from 'react';
import styled from 'styled-components';
import {HexToRgba} from '../utils';

function Thumbnail(props) {
    const copyTextRef = React.createRef();

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 1.2rem;
        overflow: hidden;
        margin-right: 2rem;
    `;

    const ThemeTitleContainer = styled.div`
        display: flex;
        width: 100%;
        height: 3rem;
        justify-content: center;
        align-items: center;
        background: ${HexToRgba(props.theme.sidebarBg, 1)};
    `;

    const ThemeTitle = styled.p`
        color: ${HexToRgba(props.theme.sidebarText, 1)};
    `;

    const Image = styled.div`
        background: url(${props.image});
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

        &:hover {
            opacity: 1;
            background: ${HexToRgba(props.theme.sidebarBg, 0.8)};
        }

        span {
            font-size: 2rem;
            color: ${HexToRgba(props.theme.sidebarText, 1)};
        }
    `;

    const copyToClipboard = () => {
        let style = JSON.stringify(props.theme);
        style = style.replace(' ', '');
        style = style.replace('\n', '');

        // Create textarea element and append to body
        const textarea = document.createElement('textarea');
        textarea.value = style
        textarea.readOnly = true;
        document.body.appendChild(textarea);

        // Select textarea and copy contents
        textarea.select();
        document.execCommand('copy');

        // Remove from body and notify completion
        document.body.removeChild(textarea);
        copyTextRef.current.innerHTML = 'Copied!';
    } 

    const resetCopyText = () => {
        copyTextRef.current.innerHTML = 'Copy style';
    }

    return (
        <Wrapper onClick={copyToClipboard}>
            <ThemeTitleContainer>
                <ThemeTitle>{props.name}</ThemeTitle>
            </ThemeTitleContainer>
            <Image>
                <ImageOverlay onMouseLeave={resetCopyText}>
                    <span ref={copyTextRef}>Copy style</span>
                </ImageOverlay>
            </Image>
        </Wrapper>
    );
}

export default Thumbnail;