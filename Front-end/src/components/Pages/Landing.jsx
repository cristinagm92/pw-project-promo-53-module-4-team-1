import Hero from "../Layout/Hero";
//import latestprojects from "../../../data/latestprojects.json";
// import ls from "../Services/ls";
import { Link } from "react-router";
import PreviewCard from "../Projects/PreviewCard";
// import fetchProjects from "../Services/fetchProjects";
import React, { useEffect, useState } from "react";

function Landing() {
  //  const Proyectos = () => {
  const [projects, setProjects] = useState(["project"]);

  useEffect(() => {
    fetch("http://localhost:4000/api/project")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => console.error("Error al cargar proyectos:", error));
  }, []);

  return (
    <>
      <Hero buttonLink="/create">Crear proyecto</Hero>

      <ul className="landingUL">
        {projects.map((projectObj) => (
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
