import { useRef } from "react";
import About from "../../components/About/About";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../sections/Footer/Footer";
import Hero from "../../sections/Hero/Hero";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavBar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <Hero />
      <About aboutRef={aboutRef} skillsRef={skillsRef} />
      <Footer />
    </>
  );
};

export default Home;
