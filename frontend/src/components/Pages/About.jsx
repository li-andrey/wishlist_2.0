import ResponsivePlayer from "../UI/ResponsivePlayer/ResponsivePlayer";
import SecondTitle from "../UI/SecondTitle/SecondTitle";
import Quote from "../UI/Quote/Quote";

const About = () => {
  return (
    <div className="about-container">
      <SecondTitle>
        MY WISHLIST - это уютный сервис для помощи в подборе подарков
      </SecondTitle>

      <ResponsivePlayer />
      <Quote />
    </div>
  );
};

export default About;
