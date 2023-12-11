import {TextAndImg} from '../../blocs/withText/TextAndImg';

const storyStepsData = [
  {
    text: 'Bien préparer son voyage peut vite être chaotique.',
    imgUrl: '/illustrations/story/story-1.svg',
  },
  {
    text: 'Et parmi toutes les informations disponibles, trouver ce qui nous correspond est compliqué.',
    imgUrl: '/illustrations/story/story-2.svg',
  },
  {
    text: 'Mais plus maintenant !',
    imgUrl: '/illustrations/story/story-3.svg',
  },
  {
    text: 'Avec UnVoy, préparez vous avec du contenu adapté à vos connaissances et objectifs.',
    imgUrl: '/illustrations/story/story-4.svg',
  },
  {
    text: 'Il ne vous restera plus qu’à partir serein !',
    imgUrl: '/illustrations/story/story-5.svg',
  },
  {
    text: 'Et a profiter de votre destination en partagent vos addresses favorites',
    imgUrl: '/illustrations/story/story-6.svg',
  },
];

export const Story = () => {
  return (
    <section id="story">
      {storyStepsData.map(({text, imgUrl}, id) => {
        const imgPosition = id % 2 === 1 ? 'right' : 'left';

        return (
          <TextAndImg
            key={`story-${id + 1}`}
            pictureDetails={{url: imgUrl, alt: '', position: imgPosition}}
            textContent={text}
            title={`${id + 1}`}
          />
        );
      })}
    </section>
  );
};
