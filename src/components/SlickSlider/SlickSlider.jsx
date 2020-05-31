import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { makeStyles } from '@material-ui/core/styles';

import './slickSlider.scss';

const useStyles = makeStyles({
  slider: {
    margin: '30px auto',
    width: '700px',
  },
  sliderItem: {
    width: '700px',
  },
  sliderImg: {
    width: '700px',
    height: '300px',
  },
});

export const SlickSlider = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings} className={classes.slider}>
      <div className={classes.sliderItem}>
        <img className={classes.sliderImg} src="./slider-6.jpg" alt="" />
      </div>
      <div className={classes.sliderItem}>
        <img className={classes.sliderImg} src="./slider-4.jpg" alt="" />
      </div>
      <div className={classes.sliderItem}>
        <img className={classes.sliderImg} src="./slider-2.png" alt="" />
      </div>
      <div className={classes.sliderItem}>
        <img className={classes.sliderImg} src="./slider-1.jpg" alt="" />
      </div>
      <div className={classes.sliderItem}>
        <img className={classes.sliderImg} src="./slider-5.jpg" alt="" />
      </div>
      <div className={classes.sliderItem}>
        <img className={classes.sliderImg} src="./slider-3.jpg" alt="" />
      </div>
    </Slider>
  );
};
