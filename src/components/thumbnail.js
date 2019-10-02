import React from 'react';
import styled from 'styled-components';

function Thumbnail(props) {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: row;
    `;

    const Image = styled.div`
        background: url(${props.image});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 1.2rem;
        width: 40rem;
        height: 30rem;
    `;

    const copyToClipboard = () => {
        // Create textarea element and append to body
        const textarea = document.createElement('textarea');
        textarea.value = JSON.stringify(props.theme);
        textarea.style.visibility = 'hidden';
        textarea.readOnly = true;
        document.body.appendChild(textarea);

        // Select textarea and copy contents
        textarea.select();
        document.execCommand('copy');

        // Remove from body and notify completion
        document.body.removeChild(textarea);
        alert('copied!')
    } 

    return (
        <Wrapper onClick={copyToClipboard}>
            <Image />
        </Wrapper>
    );
}

export default Thumbnail;