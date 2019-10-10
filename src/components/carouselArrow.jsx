import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {KeyboardArrowLeft} from 'styled-icons/material/KeyboardArrowLeft';
import {KeyboardArrowRight} from 'styled-icons/material/KeyboardArrowRight';

CarouselArrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

function CarouselArrow(props) {
    const {className, onClick} = props;
    const Arrow = styled.div`
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 10rem;
        transform: translate(0, -50%);
        cursor: pointer;
        background: #12171E;
        border-radius: 1.2rem;
        z-index: 1;
    `;

    // Next arrow
    if (className.includes('slick-next')) {
        const ArrowIcon = styled(KeyboardArrowRight)`
            height: 6.5rem;
            color: ${className.includes('slick-disabled') ? 'rgba(255, 255, 255, 0.3)' : '#fff'};
        `;
        return (
            <Arrow
                style={{right: '-4.5rem'}}
                onClick={onClick}
            >
                <ArrowIcon/>
            </Arrow>
        );
    }

    const ArrowIcon = styled(KeyboardArrowLeft)`
        height: 6.5rem;
        color: ${className.includes('slick-disabled') ? 'rgba(255, 255, 255, 0.3)' : '#fff'};
    `;

    // Prev arrow
    return (
        <Arrow
            style={{left: '-4.5rem'}}
            onClick={onClick}
        >
            <ArrowIcon/>
        </Arrow>
    );
}

export default CarouselArrow;