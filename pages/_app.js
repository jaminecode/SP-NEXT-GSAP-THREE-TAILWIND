import "../styles/globals.css";

import { useState } from "react";
import AppContext from "../components/context/AppContext";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
