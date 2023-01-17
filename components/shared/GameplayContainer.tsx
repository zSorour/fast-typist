type Props = {
  children: React.ReactNode;
};

const GameplayContainer = (props: Props) => {
  return (
    <div className="flex self-center flex-col items-center justify-center gap-3 md:w-[65%]">
      {props.children}
    </div>
  );
};
export default GameplayContainer;
