import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../../../../components';
import './Hero.css';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="LL-Hero">
      <div className="LL-Hero-left">
        <Heading tag="h1" size="2xl">
          Little Lemon
        </Heading>
        <p className="subtitle">Chicago</p>
        <p id="LL-Hero-desc">
        Little Lemon is a vibrant and colorful dining experience that offers a taste of the island's rich culture and cuisine. As soon as you step inside, you'll be greeted by a warm and welcoming atmosphere, complete with traditional Hawaiian decor, such as tropical plants, tiki torches, and wooden carvings.
        </p>
        <Button
          ariaLabel="Reservation"
          id="LL-Hero-btn"
          primary
          onClick={() => navigate('/bookings')}
        >
          Reservation
        </Button>
      </div>
      <div className="LL-Hero-right">
        <img
          src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Little Lemon - Hero"
        />
      </div>
    </section>
  );
};
