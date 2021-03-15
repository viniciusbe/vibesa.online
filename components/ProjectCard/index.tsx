import Image from 'next/image';

const ProjectCard = (): JSX.Element => {
  return (
    <div>
      <h1>vibesa.online</h1>
      <p>Esse portfolio</p>
      <Image src="/vibesa.png" width={300} height={300} />
    </div>
  );
};

export default ProjectCard;
