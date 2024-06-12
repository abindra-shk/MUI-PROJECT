import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AboutSection() {
  const swiper1 = new Swiper('.swiper1', {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });
  
  return (
    <section id="about" className="section-about">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          EXCITING TOURS FOR ADVENTUROUS PEOPLE
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="text-area">
              <Typography variant="h3" className="text-heading" gutterBottom>
                YOU ARE GOING TO FALL IN LOVE WITH NATURE
              </Typography>
              <Typography variant="body1" className="paragraph" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </Typography>
              <Typography variant="h3" className="text-heading" gutterBottom>
                Live adventures like you never have before
              </Typography>
              <Typography variant="body1" className="paragraph" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                quia nam nihil doloribus earum? Mollitia iusto architecto hic
                aliquam amet illum blanditiis totam possimus quia dignissimos
                rerum maxime, accusamus cupiditate.
              </Typography>
              <Button variant="contained" className="btn-link">
                Learn more &rarr;
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="section-swiper">
              <div className="swiper swiper1">
                <div className="swiper-wrapper">
                  {/* Swiper slides go here */}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
