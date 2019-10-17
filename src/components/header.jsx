import React from 'react';
import styled from 'styled-components';

function Header() {
    const Wrapper = styled.div`
        background-color: #222C3B;
        display: flex;
        flex-direction: row;
        height: 60px;
        align-items: center;
    `;

    const Title = styled.div`
        display: flex;
        flex-direction: row;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        background-color: #0058CC;

        h3 {
            font-size: 2rem;
            margin: 0;
            font-weight: 300;
            color: #181F29;

            span:first-child {
                color: #fff;
                font-weight: bold;           
            }
        }
    `;

    return (
        <Wrapper>
            <Title>
                <h3>
                    <span>{'Mattermost '}</span>
                    <span>{'Themes'}</span>
                </h3>
            </Title>
        </Wrapper>
    );
}

export default Header;