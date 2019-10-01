import React from 'react';
import Slider from 'react-slick';

import Thumbnail from './thumbnail';

function ImageCarousel(props) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
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
        <Slider {...settings}>
            {thumbnails}
        </Slider>
    );
}

export default ImageCarousel;
