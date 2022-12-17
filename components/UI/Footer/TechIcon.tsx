import Image from 'next/image';
import { StaticImageData } from 'next/image';

type Props = {
  src: string | StaticImageData;
  alt: string;
};

const TechIcon = (props: Props) => {
  return (
    <Image
      className="aspect-square w-10 bg-white rounded-md border-[1px] border-black"
      src={props.src}
      alt={props.alt}
    />
  );
};

export default TechIcon;
