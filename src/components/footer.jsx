import React from 'react';
import styled from 'styled-components';
import {Github} from 'styled-icons/boxicons-logos/Github';
import {colors, hexToRgba, breakpoint} from '../utils';

function Footer() {
    const Wrapper = styled.div`
        margin-top: 5rem;
        padding: 1.5rem;
        background-color: ${colors.main};
        display: flex;
        flex-direction: column;
        font-size: 1.7rem;
        justify-content: space-between;
        align-items: center;
        min-height: 10rem;

        ${breakpoint('md')`
            flex-direction: row;
        `}

        span {
            text-decoration: none;
            color: ${colors.font};
            
        }

        span > a {
            color: ${colors.link};
        }
    `;

    const Link = styled.a`
      display: flex;
      flex-direction: row;
      text-decoration: none;
      align-items: center;
      color: ${colors.font};
      margin-left: 2rem;

      &:hover {
        color: ${hexToRgba(colors.font, 0.8)};

        svg {
          color: ${hexToRgba(colors.font, 0.8)};
        }
      }
    `;

    const GithubIconWhite = styled(Github)`
      height: 4rem;
      padding-right: 1.5rem;
    `;

    const Span = styled.div`
        display: flex;
        flex-direction: column;
        line-height: 1.5;
        align-items: flex-end;

        span {
            margin-top: 10px;
        }

        span > a {
            text-decoration: none;
            font-weight: bold;
            color: ${colors.link};
        }
    `;

    return (
        <Wrapper>
            <Link href='https://github.com/avasconcelos114/mattermost-themes'>
                <span>
                    <GithubIconWhite/>
                </span>
                <p>{'View on GitHub'}</p>
            </Link>
            <Span>
                <span>
                    {'This is an open source initiative not affiliated with '}
                    <a href='https://mattermost.com'>{'Mattermost Inc.'}</a>
                </span>
                <span>
                    {'Created by '}
                    <a href='https://github.com/avasconcelos114/'>{'Andre Vasconcelos'}</a>
                    {' & '}
                    <a href='https://github.com/josephk96'>{'Soo Hwan Kim'}</a>
                </span>
            </Span>
        </Wrapper>
    );
}

export default Footer;