import React from 'react';
import styled from 'styled-components';

function Header() {
    const Wrapper = styled.div`
        padding: 15px;
        background-color: #454545;
        color: #fff;
        display: flex;
        flex-direction: row;
        font-size: 2rem;

        h3 {
            margin: 0;

            span:first-child {
                color: #12d7e6;            
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