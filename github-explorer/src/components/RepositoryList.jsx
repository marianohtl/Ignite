import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

//https://api.github.com/users/marianohtl/repos

const repositoryName = 'unform 2';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/marianohtl/repos').then(response => response.json()).then(data => setRepositories(data));
    console.log(repositories)

  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository="unform 2" />
        <RepositoryItem repository="unform 3" />
        <RepositoryItem repository="unform 4" />
      </ul>
    </section>
  )
}