type Props = {
  timeLeft: number;
};

const NextWordTimer = (props: Props) => {
  return (
    <div className="flex flex-col items-center font-bold md:w-[65%] md:mx-auto">
      <span className="text-2xl">Seconds Remaining</span>
      <span className="text-4xl">{props.timeLeft}</span>
    </div>
  );
};

export default NextWordTimer;
