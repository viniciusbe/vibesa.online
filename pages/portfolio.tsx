import ProjectCard from '../components/ProjectCard';

const Portfolio = (): JSX.Element => {
  return (
    <div className="text-xl text-center font-light">
      <h1 className="text-4xl text-white font-semibold m-4">Portfolio</h1>
      <div className="flex justify-center flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Portfolio;
