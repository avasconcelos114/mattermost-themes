import React from 'react';
import styled from 'styled-components';

function Thumbnail(props) {
    const Wrapper = styled.div`
        padding: 10px;
        background-color: #454545;
        background: url(${props.image});
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 300px;
    `;

    return (
        <Wrapper>
            
        </Wrapper>
    );
}

export default Thumbnail;