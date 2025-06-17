import Hero from "../Layout/Hero";
import latestprojects from "../../../data/latestprojects.json";
import { Link } from "react-router";
import CardPreview from "../Projects/CardPreview";

function Landing() {
  return (
    <>
      <Hero />

      <Link className="button--link" to="/create">
        Crear un nuevo proyecto
      </Link>

      <ul>
        {latestprojects.map((projectObj) => (
          <li key={projectObj.id}>
            <CardPreview
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
