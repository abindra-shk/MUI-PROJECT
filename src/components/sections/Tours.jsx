import { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
} from '@mui/material';
import Swiper from 'swiper/bundle';
const tours = [
  {
    id: 1,
    title: 'The Sea Explorer',
    details: [
      '3 day tours',
      'Up to 30 people',
      '2 tour guides',
      'Sleep in cozy hotels',
      'Difficulty: easy',
    ],
    price: '$297',
    pictureClass: 'tour-card-picture-1',
    backClass: 'tour-card-side-back-1',
    headingSpanClass: 'tour-card-heading-span-1',
  },
  {
    id: 2,
    title: 'The Forest Hiker',
    details: [
      '7 day tours',
      'Up to 40 people',
      '6 tour guides',
      'Sleep in provided tents',
      'Difficulty: medium',
    ],
    price: '$497',
    pictureClass: 'tour-card-picture-2',
    backClass: 'tour-card-side-back-2',
    headingSpanClass: 'tour-card-heading-span-2',
  },
  {
    id: 3,
    title: 'The Snow Adventurer',
    details: [
      '5 day tours',
      'Up to 15 people',
      '3 tour guides',
      'Sleep in provided tents',
      'Difficulty: hard',
    ],
    price: '$897',
    pictureClass: 'tour-card-picture-3',
    backClass: 'tour-card-side-back-3',
    headingSpanClass: 'tour-card-heading-span-3',
  },
  {
    id: 4,
    title: 'The Snow Adventurer',
    details: [
      '5 day tours',
      'Up to 15 people',
      '3 tour guides',
      'Sleep in provided tents',
      'Difficulty: hard',
    ],
    price: '$897',
    pictureClass: 'tour-card-picture-3',
    backClass: 'tour-card-side-back-3',
    headingSpanClass: 'tour-card-heading-span-3',
  },
];

const Tours = () => {
  useEffect(() => {
    const swiperEl = new Swiper('.swiper2', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.60': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.50': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    swiperEl.init();

    return () => {
      swiperEl.destroy();
    };
  }, []);

  return (
    <Box component="section" id="tours" className="section-tours">
      <Container>
        <Typography variant="h4">MOST POPULAR TOURS</Typography>
        <Box className="feature-swiper">
          <div className="swiper-container swiper2">
            <div className="swiper-wrapper">
              {tours.map((tour) => (
                <div key={tour.id} className="swiper-slide">
                  <Card className="tour-card" elevation={0}>
                    <Box className={`tour-card-side tour-card-side-front`}>
                      <Box
                        className={`tour-card-picture ${tour.pictureClass}`}
                      ></Box>
                      <Typography variant="h4" className="tour-card-heading">
                        <span
                          className={`tour-card-heading-span ${tour.headingSpanClass}`}
                        >
                          {tour.title}
                        </span>
                      </Typography>
                      <CardContent className="tour-card-details">
                        <List>
                          {tour.details.map((detail, index) => (
                            <ListItem key={index}>{detail}</ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Box>
                    <Box
                      className={`tour-card-side tour-card-side-back ${tour.backClass}`}
                    >
                      <Box className="tour-card-cta">
                        <Box className="tour-card-price-box">
                          <Typography className="tour-card-price-only">
                            Only
                          </Typography>
                          <Typography className="tour-card-price-value">
                            {tour.price}
                          </Typography>
                        </Box>
                        <CardActions sx={{ justifyContent: 'center' }}>
                          <Button>Book now!</Button>
                        </CardActions>
                      </Box>
                    </Box>
                  </Card>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Tours;
