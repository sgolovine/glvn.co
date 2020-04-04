import React from "react";

import "../styles/linker.css";
import "../styles/root.css";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
