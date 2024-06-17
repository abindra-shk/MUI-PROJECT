import * as React from 'react';
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Form() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Form Data:', {
      name: formData.get('name'),
      experience: formData.get('experience'),
      availability: formData.get('availability'),
    });
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Sign In
      </Button>
      <Modal
        aria-labelledby="sign-in-modal-title"
        aria-describedby="sign-in-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} component="form" onSubmit={handleSubmit}>
            <Typography id="sign-in-modal-title" variant="h6" component="h2">
              Sign In
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="firstname"
                  name="firstname"
                  label="FirstName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="lastname"
                  name="lastname"
                  label="LastName"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Date of Birth</FormLabel>
                  <TextField
                    fullWidth
                    required
                    id="dob"
                    name="dob"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="terms" required />}
                  label="I accept the terms and conditions"
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="secondary" type="submit" fullWidth sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Form;
