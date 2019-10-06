import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Github} from 'styled-icons/boxicons-logos/Github';

function Footer() {
    const Wrapper = styled.div`
        margin-top: 5rem;
        padding: 1.5rem;
        background-color: #454545;
        display: flex;
        flex-direction: column;
        font-size: 1.7rem;
        justify-content: space-between;
        align-items: center;
        min-height: 10rem;

        ${breakpoint('tablet')`
            flex-direction: row;
        `}

        span {
            text-decoration: none;
            color: #d4d4d4;
            
        }

        span > a {
            color: blue;
        }
    `;

    const Link = styled.a`
      display: flex;
      flex-direction: row;
      text-decoration: none;
      color: #d4d4d4;
      margin-left: 2rem;

      &:hover {
        color: #fff;

        svg {
          color: #fff;
        }
      }
    `;

    const GithubIconWhite = styled(Github)`
      height: 4.5rem;
      color: #d4d4d4;
      padding-right: 1.5rem;
    `;

    const Span = styled.div`
        color: #d4d4d4;
        display: flex;
        flex-direction: column;
        line-height: 1.5;
        align-items: center;

        span {
            margin-top: 2rem;
        }

        span > a {
            text-decoration: none;
            color: #12d7e6;
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
                    {'This is an open source initiative not affiliated with'}
                    <a href='https://mattermost.com'>{'Mattermost Inc.'}</a>
                </span>
                <span>
                    {'Created for the'}
                    <a href='https://hacktoberfest.digitalocean.com/'>
                        {'2019 Hacktoberfest '}
                    </a>
                    {'by'}
                    <br/>
                    <a href='https://github.com/avasconcelos114/'>{'Andre Vasconcelos'}</a>
                    {' & '}
                    <a href='https://github.com/josephk96'>{'Soo Hwan Kim'}</a>
                </span>
            </Span>
        </Wrapper>
    );
}

export default Footer;