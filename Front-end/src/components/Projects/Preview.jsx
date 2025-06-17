import CardPreview from "./CardPreview";

function Preview({ objToSend, cardInfo, changesImage }) {
  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{
          backgroundImage: objToSend.photo ? `url(${objToSend.photo})` : null,
        }}
      ></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal project card
          </span>
        </h2>

        <CardPreview
          objToSend={objToSend}
          cardInfo={cardInfo}
          changesImage={changesImage}
        />
        <a className="link" href={cardInfo} target="_blank">
          {cardInfo}
        </a>
      </article>
    </section>
  );
}

export default Preview;
