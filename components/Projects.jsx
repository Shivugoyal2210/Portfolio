import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TNaes from '../public/assets/projects/TNaesthetics.png';
import fihub from '../public/assets/projects/fihub.png';
import wander from '../public/assets/projects/wandermind.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Northcott Aesthetics"
            backgroundImg={TNaes}
            projectUrl="/tnaes"
            tech="React JS"
          />
          <ProjectItem
            title="Finance Dashbaord"
            backgroundImg={fihub}
            projectUrl="/fihub"
            tech="React JS"
          />
          <ProjectItem
            title="WanderMind"
            backgroundImg={wander}
            projectUrl="/wander"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
