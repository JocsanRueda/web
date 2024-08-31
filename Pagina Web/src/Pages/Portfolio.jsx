import { useState, useEffect } from "react";
import { Card } from "../Components/Card";

export function Portfolio() {
  const [repos, setRepos] = useState([]);

  async function getRepositories(username) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = await response.json();

    setRepos(repos);
  }

  useEffect(() => {
    getRepositories("JocsanRueda");
  }, []);
  return (
    <>
      <div className="text-white">
        <h1 className="lexend-deca-custom-1">Portafoleo</h1>
        <div className="p-3">
          <div className="d-flex flex-row flex-wrap p-2">
            {repos.map((element, index) => {
              return <Card element={element} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
