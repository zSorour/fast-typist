import TechIcon from './TechIcon';
import typescriptLogo from 'public/typescript.webp';
import nextjsLogo from 'public/nextjs.png';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-3 w-screen bg-main bg-opacity-70 border-t-4 border-emerald-700">
      <p className="font-bold text-2xl py-2 gradient-text-main animate-text">
        Fast Typist by zSorour
      </p>
      {/* <div className="flex flex-col gap-2 items-center mt-2">
        <p>built with love using</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <TechIcon src={typescriptLogo} alt="TypeScript Logo" />
          <TechIcon src={nextjsLogo} alt="Next.js Logo" />
          <TechIcon src={typescriptLogo} alt="TypeScript Logo" />
          <TechIcon src={nextjsLogo} alt="Next.js Logo" />
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
