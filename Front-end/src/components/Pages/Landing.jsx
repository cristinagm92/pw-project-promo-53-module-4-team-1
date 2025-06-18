import Hero from "../Layout/Hero";
import latestprojects from "../../../data/latestprojects.json";
import { Link } from "react-router";
import PreviewCard from "../Projects/PreviewCard";

function Landing() {
  return (
    <>
      <Hero buttonLink="/create">Crear proyecto</Hero>

      <ul className="landingUL">
        {latestprojects.map((projectObj) => (
          <li className="landingLi" key={projectObj.id}>
            <PreviewCard
              name={projectObj.name}
              slogan={projectObj.slogan}
              desc={projectObj.description}
              technologies={projectObj.technologies}
              demo={projectObj.demo}
              repo={projectObj.repo}
              author={projectObj.author}
              job={projectObj.job}
              photo={projectObj.photo}
              image={projectObj.image}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Landing;
