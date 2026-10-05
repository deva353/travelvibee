import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import Destinations from "./sections/Destinations";
import Experiences from "./sections/Experiences";
import Planner from "./sections/Planner";
import Stories from "./sections/Stories";
import Newsletter from "./sections/Newsletter";
import Footer from "./sections/Footer";

function App() {

  const [dark, setDark] = useState(false);

  useEffect(() => {

    document.body.classList.toggle(
      "dark-page",
      dark
    );

  }, [dark]);

  return (
    <>
      <ScrollProgress />

      <CustomCursor />

      <Navbar
        dark={dark}
        setDark={setDark}
      />

      <main>

        <Hero />

        <Destinations />

        <Experiences />

        <Planner />

        <Stories />

        <Newsletter />

      </main>

      <Footer />
    </>
  );
}

export default App;