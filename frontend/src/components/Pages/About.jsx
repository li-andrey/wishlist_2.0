import ResponsivePlayer from "../UI/ResponsivePlayer/ResponsivePlayer";
import SecondTitle from "../UI/SecondTitle/SecondTitle";
import Quote from "../UI/Quote/Quote";

const About = () => {
  return (
    <div>
      <SecondTitle>
        MY WISHLIST - это уютный сервис для помощи в подборе подарков для ваших друзей и родственников
      </SecondTitle>
      <ResponsivePlayer />
      <Quote />
      <SecondTitle>
      Что такое вишлист и для чего он нужен?
      </SecondTitle>
      <p>Вишлист — это список ваших желаний: того, что вы хотите получить в подарок или приобрести. Такой список можно составить не только ко Дню рождения, но и на свадьбу или ее годовщину, на Новый год, гендер-пати, 23 февраля и 8 марта, в общем, на любой праздник! А можно добавлять подарки и без повода

Вишлист поможет определиться с желаниями и избавит вас от глупых и ненужных подарков: поделитесь вишлистом с близкими, и они всегда будут знать, что вам подарить.</p>
    </div>
  );
};

export default About;
