import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from './Carousel';
import type { Project } from '../../interfaces/interfaces';

export default function ProjectCarousel({ projects }: { projects: Array<Project> }) {
  return (
    <Carousel autoPlay infiniteLoop>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.link} alt={project.title} />
          <p className="legend">{project.title}</p>
        </div>
      ))}
    </Carousel>
  );
}
