import React from "react";
import Head from "next/head";

interface Props {
  title: string;
}

const CustomHead = (props: Props) => {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Believe me I am a programmer" />
      <link rel="icon" href="/logo.svg" />
    </Head>
  );
};

export default CustomHead;
