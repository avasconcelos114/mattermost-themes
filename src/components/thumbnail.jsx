import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getGSAP = () => import('gsap');

import {hexToRgba} from '../utils';

Thumbnail.propTypes = {
    theme: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    addedDate: PropTypes.string,
};

const ThemeTitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
`;

const MockupContainer = styled.div`
    display: flex;
    width: 100%;
    height: 30rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 28%;
    min-width: 28%;
    height: 100%;
    background: ${(props) => props.$sidebarBg};
    color: ${(props) => props.$sidebarText};
    font-size: 1.3rem;
    overflow: hidden;
`;

const SidebarHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 0.1rem 1rem;
    background: ${(props) => props.$sidebarHeaderBg};
    color: ${(props) => props.$sidebarHeaderTextColor};
    font-weight: 700;
    font-size: 1.2rem;
    min-height: 3.6rem;
`;

const SidebarSection = styled.div`
    padding: 0.8rem 0;
`;

const SidebarSectionTitle = styled.div`
    padding: 0.3rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0.7;
    letter-spacing: 0.05rem;
`;

const SidebarItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0.4rem 1rem;
    font-size: 1.2rem;
    color: ${(props) => props.$active ? props.$activeColor : (props.$unread ? props.$unreadText : props.$textColor)};
    font-weight: ${(props) => props.$unread ? '700' : '400'};
    border-left: 3px solid ${(props) => props.$active ? props.$activeBorder : 'transparent'};
    background: ${(props) => props.$active ? props.$hoverBg : 'transparent'};
    gap: 0.5rem;
`;

const UnreadsPill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.3rem 1rem;
    padding: 0.3rem 0.6rem;
    border-radius: 0.3rem;
    background: ${(props) => props.$bg};
    color: ${(props) => props.$color};
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
`;

const StatusDot = styled.span`
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${(props) => props.$color};
    flex-shrink: 0;
`;

const MentionBadge = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.8rem;
    height: 1.8rem;
    border-radius: 0.9rem;
    background: ${(props) => props.$bg};
    color: ${(props) => props.$color};
    font-size: 1rem;
    font-weight: 700;
    margin-left: auto;
    padding: 0 0.4rem;
`;

const CenterChannel = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    background: ${(props) => props.$bg};
    color: ${(props) => props.$color};
`;

const ChannelHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 0.1rem 1.2rem;
    border-bottom: 1px solid ${(props) => hexToRgba(props.$color, 0.15)};
    font-weight: 700;
    font-size: 1.4rem;
    min-height: 3.6rem;
`;

const MessagesArea = styled.div`
    flex: 1;
    padding: 0.8rem 1.2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const MessageRow = styled.div`
    display: flex;
    gap: 0.7rem;
`;

const Avatar = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background: ${(props) => props.$color};
    flex-shrink: 0;
    opacity: 0.4;
`;

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
    flex: 1;
`;

const MessageAuthor = styled.span`
    font-weight: 700;
    font-size: 1.2rem;
`;

const MessageText = styled.div`
    font-size: 1.1rem;
    line-height: 1.4;
    opacity: 0.85;
`;

const MentionHighlight = styled.span`
    background: ${(props) => props.$bg};
    color: ${(props) => props.$linkColor};
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
`;

const LinkText = styled.span`
    color: ${(props) => props.$color};
`;

const CodeBlock = styled.div`
    background: ${(props) => hexToRgba(props.$color, 0.08)};
    border: 1px solid ${(props) => hexToRgba(props.$color, 0.15)};
    border-radius: 4px;
    padding: 0.5rem 0.7rem;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1rem;
    line-height: 1.5;
    overflow: hidden;
    white-space: pre;
`;

const NewMessageDivider = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: ${(props) => props.$color};
    font-size: 1rem;
    font-weight: 600;
    padding: 0.3rem 0;

    &::before,
    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: ${(props) => props.$color};
    }
`;

const MessageInput = styled.div`
    display: flex;
    align-items: center;
    margin: 0 1.2rem 0.8rem;
    padding: 0.6rem 1rem;
    border: 1px solid ${(props) => hexToRgba(props.$color, 0.2)};
    border-radius: 4px;
    font-size: 1.1rem;
    opacity: 0.5;
`;

const ButtonSample = styled.span`
    display: inline-block;
    background: ${(props) => props.$bg};
    color: ${(props) => props.$color};
    padding: 0.3rem 0.7rem;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    margin-left: auto;
`;

const ImageOverlay = styled.div.attrs((props) => ({
    background: hexToRgba(props.theme.sidebarBg, 0.8),
    color: props.theme.sidebarText,
}))`
    display: flex;
    background: ${(props) => props.background};
    width: 100%;
    height: 100%;
    opacity: 0;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    span {
        font-size: 2rem;
        color: ${(props) => props.color}
    }
`;

const NewBadge = styled.div`
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    background: #e01e5a;
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 0.4rem 0.6rem;
    border-radius: 0.4rem;
    letter-spacing: 0.05rem;
    z-index: 1;
    text-transform: uppercase;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1.2rem;
    width: 0%;
    height: 0%;
    overflow: hidden;
    box-shadow: 1px 6px 20px rgba(0,0,0,0.35);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
`;

function Thumbnail(props) {
    const copyTextRef = useRef(null);
    const overlayRef = useRef(null);
    const thumbnailRef = useRef(null);

    const t = props.theme;

    function isNew() {
        if (!props.addedDate) return false;
        const added = new Date(props.addedDate);
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        return added >= sixMonthsAgo;
    }

    useEffect(() => {
        async function animate() {
            const {TweenLite, Power3} = await getGSAP();
            setTimeout(() => {
                TweenLite.to(thumbnailRef.current, 0, {width: '100%', ease: Power3.easeOut});
                TweenLite.to(thumbnailRef.current, 0, {height: '33rem', ease: Power3.easeOut});
            }, props.index * 70 || 1);
        }
        animate();
    }, [props.index, thumbnailRef]);

    function copyToClipboard() {
        let style = JSON.stringify(props.theme);
        style = style.replace(' ', '');
        style = style.replace('\n', '');

        const textarea = document.createElement('textarea');
        textarea.value = style;
        textarea.readOnly = true;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);
        copyTextRef.current.innerHTML = 'Copied!';
    }

    async function onMouseleave() {
        const {TweenLite, Power3} = await getGSAP();
        TweenLite.to(overlayRef.current, 0.25, {css: {opacity: 0}, ease: Power3.easeOut}).play();
    }

    async function onMouseEnter() {
        const {TweenLite, Power3} = await getGSAP();
        copyTextRef.current.innerHTML = 'Copy style';
        TweenLite.to(overlayRef.current, 0.25, {css: {opacity: 1}, ease: Power3.easeOut}).play();
    }

    return (
        <Wrapper
            ref={thumbnailRef}
            onClick={copyToClipboard}
        >
            {isNew() && <NewBadge>New</NewBadge>}
            <ThemeTitleContainer style={{background: t.sidebarBg}}>
                <p style={{color: t.sidebarText}}>{props.name}</p>
            </ThemeTitleContainer>
            <MockupContainer>
                <Sidebar $sidebarBg={t.sidebarBg} $sidebarText={t.sidebarText}>
                    <SidebarHeader
                        $sidebarHeaderBg={t.sidebarHeaderBg}
                        $sidebarHeaderTextColor={t.sidebarHeaderTextColor}
                    >
                        Contributors
                    </SidebarHeader>

                    <SidebarSection>
                        <SidebarSectionTitle>Channels</SidebarSectionTitle>
                        <SidebarItem
                            $textColor={t.sidebarText}
                            $unreadText={t.sidebarUnreadText}
                            $activeColor={t.sidebarTextActiveColor}
                            $activeBorder={t.sidebarTextActiveBorder}
                            $hoverBg={t.sidebarTextHoverBg}
                            $active
                        >
                            Town Square
                        </SidebarItem>
                        <SidebarItem
                            $textColor={t.sidebarText}
                            $unreadText={t.sidebarUnreadText}
                            $activeColor={t.sidebarTextActiveColor}
                            $activeBorder={t.sidebarTextActiveBorder}
                            $hoverBg={t.sidebarTextHoverBg}
                            $unread
                        >
                            Off-Topic
                            <MentionBadge $bg={t.mentionBg} $color={t.mentionColor}>2</MentionBadge>
                        </SidebarItem>
                        <SidebarItem
                            $textColor={t.sidebarText}
                            $unreadText={t.sidebarUnreadText}
                            $activeColor={t.sidebarTextActiveColor}
                            $activeBorder={t.sidebarTextActiveBorder}
                            $hoverBg={t.sidebarTextHoverBg}
                        >
                            Design
                        </SidebarItem>
                    </SidebarSection>

                    <UnreadsPill $bg={t.buttonBg} $color={t.buttonColor}>
                        More unreads
                    </UnreadsPill>

                    <SidebarSection>
                        <SidebarSectionTitle>Direct Messages</SidebarSectionTitle>
                        <SidebarItem
                            $textColor={t.sidebarText}
                            $unreadText={t.sidebarUnreadText}
                            $activeColor={t.sidebarTextActiveColor}
                            $activeBorder={t.sidebarTextActiveBorder}
                            $hoverBg={t.sidebarTextHoverBg}
                        >
                            <StatusDot $color={t.onlineIndicator} />
                            Alice
                        </SidebarItem>
                        <SidebarItem
                            $textColor={t.sidebarText}
                            $unreadText={t.sidebarUnreadText}
                            $activeColor={t.sidebarTextActiveColor}
                            $activeBorder={t.sidebarTextActiveBorder}
                            $hoverBg={t.sidebarTextHoverBg}
                        >
                            <StatusDot $color={t.awayIndicator} />
                            Bob
                        </SidebarItem>
                        <SidebarItem
                            $textColor={t.sidebarText}
                            $unreadText={t.sidebarUnreadText}
                            $activeColor={t.sidebarTextActiveColor}
                            $activeBorder={t.sidebarTextActiveBorder}
                            $hoverBg={t.sidebarTextHoverBg}
                        >
                            <StatusDot $color={t.dndIndicator} />
                            Charlie
                        </SidebarItem>
                    </SidebarSection>
                </Sidebar>

                <CenterChannel $bg={t.centerChannelBg} $color={t.centerChannelColor}>
                    <ChannelHeader $color={t.centerChannelColor}>
                        Town Square
                    </ChannelHeader>

                    <MessagesArea>
                        <MessageRow>
                            <Avatar $color={t.centerChannelColor} />
                            <MessageContent>
                                <MessageAuthor>Alice</MessageAuthor>
                                <MessageText>
                                    Hey team, check out the{' '}
                                    <LinkText $color={t.linkColor}>latest update</LinkText>!
                                </MessageText>
                            </MessageContent>
                        </MessageRow>

                        <NewMessageDivider $color={t.newMessageSeparator}>
                            New Messages
                        </NewMessageDivider>

                        <MessageRow>
                            <Avatar $color={t.centerChannelColor} />
                            <MessageContent>
                                <MessageAuthor>Bob</MessageAuthor>
                                <MessageText>
                                    <MentionHighlight $bg={t.mentionHighlightBg} $linkColor={t.mentionHighlightLink}>
                                        @Alice
                                    </MentionHighlight>
                                    {' '}sounds great!
                                </MessageText>
                                <CodeBlock $color={t.centerChannelColor}>
                                    {'const theme = getTheme();\nreturn theme.colors;'}
                                </CodeBlock>
                            </MessageContent>
                        </MessageRow>

                        <MessageRow>
                            <Avatar $color={t.centerChannelColor} />
                            <MessageContent>
                                <MessageAuthor>Charlie</MessageAuthor>
                                <MessageText>
                                    Deploying now
                                </MessageText>
                            </MessageContent>
                        </MessageRow>
                    </MessagesArea>

                    <MessageInput $color={t.centerChannelColor}>
                        Write a message...
                        <ButtonSample $bg={t.buttonBg} $color={t.buttonColor}>Send</ButtonSample>
                    </MessageInput>
                </CenterChannel>

                <ImageOverlay
                    ref={overlayRef}
                    theme={t}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseleave}
                >
                    <span ref={copyTextRef}>
                        {'Copy style'}
                    </span>
                </ImageOverlay>
            </MockupContainer>
        </Wrapper>
    );
}

export default Thumbnail;
