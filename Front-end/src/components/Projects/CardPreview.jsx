function CardPreview({ objToSend }) {
  return (
    <>
      <div className="card__author">
        <div
          className="card__authorPhoto"
          style={{
            backgroundImage: objToSend.image ? `url(${objToSend.image})` : null,
          }}
        ></div>
        <p className="card__job">{objToSend.job || "Full stack Developer"} </p>
        <h3 className="card__name">
          {" "}
          {objToSend.autor || "Emmelie Bjôrklund"}{" "}
        </h3>
      </div>

      <div className="card__project">
        <h3 className="card__name"> {objToSend.name || "Elegant Workspace"}</h3>
        <p className="card__slogan">
          {objToSend.slogan || "Diseños Exclusivos"}
        </p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">
          {objToSend.desc ||
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {objToSend.technologies || "React JS - HTML - CSS"}
          </p>

          <a
            className="icon icon__www"
            href={objToSend.demo}
            target="_blank"
            title="Haz click para ver el proyecto online"
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href={objToSend.repo}
            target="_blank"
            title="Haz click para ver el código del proyecto"
          >
            GitHub link
          </a>
        </div>
      </div>
    </>
  );
}

export default CardPreview;
