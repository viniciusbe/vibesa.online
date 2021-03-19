import ProjectCard from '../components/ProjectCard';

const Portfolio = (): JSX.Element => {
  return (
    <div className="text-xl text-center font-light">
      <h1 className="text-4xl text-white font-semibold mb-4">Portfolio</h1>
      <div className="flex">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Portfolio;
