import React, {MouseEvent} from 'react';

interface Props {
    title: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    type: "filled" | "outline"
}

const HeroBtn = (props: Props) => {

  const { title, onClick, type } = props;

  return (
    <button onClick={onClick} className={`px-5 py-2 md:text-2xl sm:text-xl text-lg tracking-widest font-thin mx-2 my-2 rounded transition-all ease-in-out ${type === "filled" ? "bg-gradient-to-r from-primary-yellow to-vermillion text-primary-dark hover:bg-gradient-to-l" : "bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow via-vermillion to-purple border-2 border-vermillion hover:bg-gradient-to-l"}`}>
        {title}
    </button>
  );
};

export default HeroBtn;