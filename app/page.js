import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
    </main>
  );
}
