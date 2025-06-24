function fetchProjects() {
  return fetch("https://http://localhost:4000/api/project/").then((res) =>
    res.json()
  );
}

export default fetchProjects;
