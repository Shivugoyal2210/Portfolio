import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello there, I'm Shivansh, a passionate computer science major in my
            senior year, eagerly preparing to make my mark in the world of
            technology. With a deep-rooted love for crafting captivating digital
            experiences, I specialize in building mobile-responsive full-stack
            web applications that combine functionality and aesthetics to create
            seamless user journeys. Since the summer of 2022, I've been immersed
            in the world of web development, honing my skills and transforming
            ideas into reality through lines of code. The thrill of turning a
            blank canvas into a dynamic, interactive web application never fails
            to ignite my creativity and drive.
          </p>
          <p className="py-2 text-gray-600">
            Beyond the world of coding, you'll often find me exploring the great
            outdoors on exhilarating hikes, drawing inspiration from nature's
            harmonious designs. I believe that maintaining a healthy mind and
            body is crucial, so I devote time to regular workouts, nurturing
            both my physical and mental well-being. Another one of my creative
            outlets is playing the guitar. Strumming soothing melodies or
            crafting my own tunes allows me to unwind and find solace in the
            power of music. Additionally, I'm currently dabbling with machine
            learning technologies, fascinated by its potential to transform
            industries and improve lives. The world of AI and machine learning
            opens up exciting possibilities, and I'm eager to venture into this
            realm in the future, leveraging data-driven solutions to solve
            complex problems. I'm thrilled to showcase my portfolio, where you
            can find a collection of my recent projects, each demonstrating my
            dedication to innovation, user-centric design, and problem-solving
            skills. Thank you for visiting my portfolio website. I hope you'll
            find my work engaging, and if you have any questions or
            collaboration opportunities, please feel free to reach out. Let's
            create something remarkable together!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
