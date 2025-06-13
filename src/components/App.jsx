import "../styles/App.scss";
import iconLaptop from "../images/laptop-code-solid.svg";
import adaLogo from "../images/adalab.png";
import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  /*
  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [repo, setRepo] = useState("");
  const [demo, setDemo] = useState("");
  const [desc, setDesc] = useState("");
  const [autor, setAutor] = useState("");
  const [job, setJob] = useState("");
  */

  const [objToSend, setObjToSend] = useState({
    name: "",
    slogan: "",
    technologies: "",
    demo: "",
    repo: "",
    desc: "",
    autor: "",
    job: "",
    photo: "",
    image: "",
  });

  const changesPhoto = (uploadedPhoto) => {
    setObjToSend({ ...objToSend, photo: uploadedPhoto });
  };
  const changesImage = (uploadedPhoto) => {
    setObjToSend({ ...objToSend, image: uploadedPhoto });
  };

  const [cardInfo, setCardInfo] = useState("");

  const changeStates = (field, value) => {
    setObjToSend({ ...objToSend, [field]: value });
  };

  localStorage.setItem("newProject", JSON.stringify(objToSend));

  const [newProject, setNewProject] = useState(
    JSON.parse(localStorage.getItem("newProject"))
  );

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("URL de la tarjeta del proyecto:", data.cardURL);
        setCardInfo(data.cardURL);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al generar la tarjeta del proyecto:", error);
      });

    return;
  };

  return (
    <div className="container">
      <Header iconLaptop={iconLaptop} adaLogo={adaLogo} />

      <main className="main">
        <Hero />
        <Preview
          objToSend={objToSend}
          cardInfo={cardInfo}
          changesImage={changesImage}
        />
        <Form
          changeStates={changeStates}
          handleSubmit={handleSubmit}
          changesPhoto={changesPhoto}
          changesImage={changesImage}
        />
      </main>
      <Footer adaLogo={adaLogo} />
    </div>
  );
}

export default App;
