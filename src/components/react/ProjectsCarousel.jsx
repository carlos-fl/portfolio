import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ProjectCarousel({ projects }) {
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
