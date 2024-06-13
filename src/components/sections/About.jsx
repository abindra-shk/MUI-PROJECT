import React from "react";
import { Box, Container, Typography, Link, Stack } from "@mui/material";
import { register } from 'swiper/element';

import "../../assets/scss/components/_section-about.scss"; // Ensure this path is correct

register();

const About = () => {
  return (
    <Box className="section-about">
      <Container className="container">
        <Typography variant="h4" className="heading">
          EXCITING TOURS FOR ADVENTUROUS PEOPLE
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          className="row"
        >
          <Box className="text-area">
            <Typography variant="h5" className="text-heading">
              YOU'RE GOING TO FALL IN LOVE WITH NATURE
            </Typography>
            <Typography className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </Typography>
            <Typography variant="h5" className="text-heading">
              Live adventures like you never have before
            </Typography>
            <Typography className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia
              nam nihil doloribus earum? Mollitia iusto architecto hic aliquam
              amet illum blanditiis totam possimus quia dignissimos rerum
              maxime, accusamus cupiditate.
            </Typography>
            <Link href="#" className="btn-link">
              Learn more &rarr;
            </Link>
          </Box>
          <Box className="section-swiper">
            <swiper-container
              spaceBetween="30"
              loop="true"
              centeredSlides="true"
              pagination-dynamic-bullets="true"
              className="swiper1"
            >
              <swiper-slide class="swiper-slide-custom">
                <img
                  src="/images/nat-1-large.jpg"
                  alt=""
                  className="image image-p1"
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide-custom">
                <img
                  src="/images/nat-2-large.jpg"
                  alt=""
                  className="image image-p2"
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide-custom">
                <img
                  src="/images/nat-3-large.jpg"
                  alt=""
                  className="image image-p3"
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide-custom">
                <img
                  src="/images/nat-4.jpg"
                  alt=""
                  className="image image-p3"
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide-custom">
                <img
                  src="/images/nat-5.jpg"
                  alt=""
                  className="image image-p3"
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide-custom">
                <img
                  src="/images/nat-6.jpg"
                  alt=""
                  className="image image-p3"
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide-custom">
                <img
                  src="/images/nat-7.jpg"
                  alt=""
                  className="image image-p3"
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide-custom">
                <img
                  src="/images/nat-8.jpg"
                  alt=""
                  className="image image-p3"
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide-custom">
                <img
                  src="/images/nat-9.jpg"
                  alt=""
                  className="image image-p3"
                />
              </swiper-slide>
            </swiper-container>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
