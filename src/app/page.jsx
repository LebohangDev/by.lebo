'use client';
import Hero from '../components/sections/Hero';
import Identity from '../components/sections/Identity';
import WorkExperience from '../components/sections/WorkExperience';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import BentoGrid from '../components/sections/BentoGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <Identity />
      <BentoGrid />
      <WorkExperience />
      <FeaturedProjects />
    </>
  );
}
