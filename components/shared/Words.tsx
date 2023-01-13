import Word from 'components/shared/Word';

type Props = {
  words: string[];
};

const Words = (props: Props) => {
  return (
    <div className="flex flex-col items-center bg-secondary p-4 rounded-lg overflow-hidden w-full h-28">
      {props.words.map((w) => (
        <Word word={w} key={w} />
      ))}
    </div>
  );
};
export default Words;
