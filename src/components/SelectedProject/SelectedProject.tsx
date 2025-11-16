import djangoImg from "../../../images/django.png";
import gitImage from "../../../images/github.png";
import javascriptImg from "../../../images/javascript.png";
import postgresImg from "../../../images/postgres.png";
import pythonImg from "../../../images/python.png";
import reactImg from "../../../images/react.png";
import typescriptImg from "../../../images/typescript.png";
import "./SelectedProject.css";

type SelectedProjectProps = {
  title: string;
  wip: boolean;
  description: string;
  github: string;
  demo?: string;
  technologies: string[];
};

export default function SelectedProject({
  title,
  wip,
  description,
  github,
  demo,
  technologies,
}: SelectedProjectProps) {
  const images: any = {
    Django: djangoImg,
    Javascript: javascriptImg,
    Postgres: postgresImg,
    Python: pythonImg,
    React: reactImg,
    Typescript: typescriptImg,
  };

  const technologiesUsed = technologies.map((tech) => {
    return (
      <img className="techImg" src={images[tech]} title={tech} alt={tech} />
    );
  });

  return (
    <div className={`selectedProjectDiv ${title}`}>
      <div className="titleDiv">
        <span className={`projectTitle Title${title}`}>{title}</span>
        <div className="techDiv">{technologiesUsed}</div>
      </div>

      {wip && (
        <div className="workInProgressDiv">
          <span className="workInProgress">Currently building</span>
        </div>
      )}

      <div>
        <p>{description}</p>
      </div>

      <div className="linksDiv">
        <a
          className="github"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitImage} />
          GitHub Repository
        </a>
        {demo && (
          <a
            className="demo"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
