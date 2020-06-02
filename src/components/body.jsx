import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {breakpoint} from '../utils';

import Thumbnail from './thumbnail';

Body.propTypes = {
    themeList: PropTypes.array.isRequired,
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    overflow-x: hidden;
    font-size: 1.5rem;
    color: #fff;
    padding: 20px;

    ${breakpoint('xl')`
        grid-template-columns: 1fr 1fr 1fr 1fr;
    `}

    ${breakpoint('lg', 'xl')`
        grid-template-columns: 1fr 1fr 1fr;
    `}

    ${breakpoint('md', 'lg')`
        grid-template-columns: 1fr 1fr;
    `}
    ${breakpoint('xs', 'md')`
        grid-template-columns: 1fr;
    `}
`;

function Body(props) {
    const thumbnails = props.themeList.map((theme, index) => {
        return (
            <Thumbnail
                key={theme.name}
                index={index + 1}
                name={theme.name}
                image={theme.thumbnailUrl}
                theme={theme.theme}
            />
        );
    });

    return (
        <Wrapper>
            {thumbnails}
        </Wrapper>
    );
}

export default Body;