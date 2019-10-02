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

    return (
        <Wrapper>
            <Image />
        </Wrapper>
    );
}

export default Thumbnail;