import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

type Props = { to: string; name: string; image?: StaticImageData };

const GameModeLink = (props: Props) => {
  return (
    <Link href={props.to}>
      <div className="flex flex-col items-center justify-center rounded-2xl bg-emerald-700 aspect-square w-28 hover:bg-emerald-500">
        {props.image && (
          <Image src={props.image} alt={`${props.name} game mode`} />
        )}
        <span className="font-bold">{props.name}</span>
      </div>
    </Link>
  );
};
export default GameModeLink;
