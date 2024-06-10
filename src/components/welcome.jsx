import Sammy from '../assets/images/sammy.jpeg';
import '../css/main.css';
// import Button from '@mui/material/Button';

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
        <img src={Sammy} alt="Sammy Image" width={200} height={200} />
        {/* <Button variant="contained">Hello world</Button>; */}
      </div>
    </>
  );
}
