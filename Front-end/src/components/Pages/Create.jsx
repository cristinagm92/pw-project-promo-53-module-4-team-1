import { useState, useEffect } from "react";
import Hero from "../Layout/Hero";
import Card from "../Projects/Card";
import Form from "../Projects/Form";

function Create() {
  const [projectUrl, setProjectUrl] = useState("");
  const serverAddress = import.meta.env.DEV
    ? "http://localhost:4000"
    : "https://pw-project-promo-53-module-4-team-1.onrender.com";
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");

    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          slogan: "",
          repo: "",
          demo: "",
          technologies: "",
          desc: "",
          author: "",
          job: "",
          photo: "",
          image: "",
        };
  });

  const changeState = (field, value) => {
    setData((prevData) => ({
      ...prevData,

      [field]: value,
    }));
  };

  const updateImage = (newImage) => {
    setData({
      ...data,
      image: newImage,
    });
  };

  const updatePhoto = (newPhoto) => {
    setData({
      ...data,
      photo: newPhoto,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Llamando al handleSubmit de mamá!");

    fetch(serverAddress + "/api/project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        if (dataResponse.success && dataResponse.cardUrl) {
          setProjectUrl(dataResponse.cardUrl); // 💡 Guardamos la URL en el estado
        }
      });
  };
  useEffect(() => {
    console.log("Guardando en localStorage:", data);
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <>
      {" "}
      <Hero buttonLink="/">Ver proyectos</Hero>
      <Card
        name={data.name}
        slogan={data.slogan}
        repo={data.repo}
        demo={data.demo}
        technologies={data.technologies}
        desc={data.desc}
        author={data.author}
        job={data.job}
        photo={data.photo}
        image={data.image}
        projectUrl={projectUrl}
      />
      <Form
        data={data}
        changeState={changeState}
        handleSubmit={handleSubmit}
        updateImage={updateImage}
        updatePhoto={updatePhoto}
      />
    </>
  );
}

export default Create;
