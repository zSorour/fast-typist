type Props = {
  word: string;
};

const Word = ({ word }: Props) => {
  return (
    <span className="font-bold first:text-5xl first:animate-pulse">{word}</span>
  );
};
export default Word;
