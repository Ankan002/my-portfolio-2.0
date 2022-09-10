import React from 'react';

interface Props {
    title: string
}

const SectionHeader = (props: Props) => {

  const { title } = props;  

  return (
    <div className="w-full flex items-center justify-center mt-2">
        <h1 className="lg:text-6xl md:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow via-vermillion to-purple tracking-widest font-thin">
            {title}
        </h1>
    </div>
  );
};

export default SectionHeader;