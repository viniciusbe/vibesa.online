import Image from 'next/image';

const ProjectCard = (): JSX.Element => {
  return (
    <div className="border border-gray-lighter rounded px-8 py-4 w-80 m-2">
      <h1>vibesa.online</h1>
      <p>Esse portfolio</p>
      <figure className="pt-2">
        <Image src="/vibesa.png" width={300} height={300} />
      </figure>
    </div>
  );
};

export default ProjectCard;
