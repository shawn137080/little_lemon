import { Heading, Stack } from '../../../../components';
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="2.25rem"
          basis="50%"
        >
          <Stack.Item vertical>
            <Heading>Little Lemon</Heading>
            <p>Chicago</p>
          </Stack.Item>

          <p>
          The restaurant's bar may feature tropical cocktails like Mai Tais and Blue Hawaiians, as well as a selection of Hawaiian beers and wines. In addition to the food and drinks, many Hawaiian restaurants offer live music or hula performances, further immersing diners in the island's rich culture and traditions.
          </p>
        </Stack.Item>

        <section className="about-right-column">
          <section id="about-images">
            <div id="about-first-image">
              <img
                src="https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Little Lemon - Burritos"
              />
            </div>
            <div id="about-second-image">
              <img
                src="https://images.pexels.com/photos/1025804/pexels-photo-1025804.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Little Lemon - Pastas"
              />
            </div>
          </section>
        </section>
      </Stack>
    </section>
  );
};
