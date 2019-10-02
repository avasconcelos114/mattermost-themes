import React from 'react';
import styled from 'styled-components';

function Footer() {
    const Wrapper = styled.div`
        padding: 15px;
        background-color: #454545;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .github-link, span {
            text-decoration: none;
            color: #d4d4d4;
        }

        span > a {
            color: blue;
        }
    `;

    return (
        <Wrapper>
            <a className="github-link" href="https://github.com/avasconcelos114/mattermost-themes">View on GitHub</a>
            <span>This is an open source initiative not officially supported by <a href="https://mattermost.com">Mattermost Inc.</a></span>
        </Wrapper>
    );
}

export default Footer;