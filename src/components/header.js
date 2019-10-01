import React from 'react';
import styled from 'styled-components';

function Header() {
    const Wrapper = styled.div`
        padding: 15px;
        background-color: #454545;
        color: #fff;
        display: flex;
        flex-direction: row;

        h3 {
            margin: 0;
            span:first-child {
                color: #0058CC;
            }
        }
    `;
    return (
        <Wrapper>
            <h3>
                <span>Mattermost </span>
                <span>Themes</span>
            </h3>
        </Wrapper>
    );
}

export default Header;