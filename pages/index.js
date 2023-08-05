import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Main from '../components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Shivnash Goyal | FullStack Developer</title>
        <meta
          name="description"
          content="I’m a full-stack web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" type="image/png" href="fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
