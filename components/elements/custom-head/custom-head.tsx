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
      <meta name="description" content="I am programmer who believes in incremental improvement..." />
      <link rel="icon" href="/logo.svg" />
    </Head>
  );
};

export default CustomHead;
