import React from "react";

function PreviewCard(props) {
  const serverAddress = import.meta.env.DEV
    ? "http://localhost:4000"
    : "https://pw-project-promo-53-module-4-team-1.onrender.com";
  return (
    <>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal project card
          </span>
        </h2>

        <div className="card__author">
          <div
            className="card__authorPhoto"
            style={{
              backgroundImage: props.image ? `url(${props.image})` : null,
            }}
          ></div>
          <p className="card__job">{props.job}</p>
          <h3 className="card__name">{props.author || "Emmelie Bjôrklund"}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{props.name || "Elegant Workspace"}</h3>
          <p className="card__slogan">{props.slogan || "Diseños Exclusivos"}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">
            {props.desc ||
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}
          </p>

          <div className="card__technicalInfo">
            <p className="card__technologies">
              {props.technologies || "React JS - HTML - CSS"}
            </p>

            <a
              className="icon icon__www"
              href={props.demo || "http://localhost:5173/#"}
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={props.repo || "http://localhost:5173/#"}
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
            <a
              className="icon icon__sun"
              href={serverAddress + props.projectUrl}
              title="Haz click para ver tu tarjeta"
            >
              Card link
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default PreviewCard;
