import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Thumbnail from './thumbnail';

function ImageCarousel(props) {
    const SliderContainer = styled.div`
      width: 100%;
      height: 100%;
      background-color: #454545;
      padding: 3rem;
    `;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    };

    const thumbnails = [];
    if (props.themes) {
        props.themes.forEach(theme => {
            thumbnails.push(
                <Thumbnail key={theme.name} name={theme.name} image={theme.thumbnailUrl} theme={theme.theme}/>
            )
        })
    }
    return (
      <SliderContainer>
        <Slider {...settings}>{thumbnails}</Slider>
      </SliderContainer>
    );
}

export default ImageCarousel;
