import Head from "next/head";
import React from "react";

const Layout = ({ children, title = "Website" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <title></title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="height=device-height, 
                   width=device-width, initial-scale=1.0, 
                   minimum-scale=1.0, maximum-scale=1.0, 
                   user-scalable=no, target-densitydpi=device-dpi"
        />
        <meta name="keywords" content=" " />
        <meta name="author" content="" />
        <meta name="robots" content="" />
        <meta data-hid="description" name="description" content="" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
