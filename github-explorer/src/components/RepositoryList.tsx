import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

//https://api.github.com/users/marianohtl/repos
interface Repository{
  name:string;
  description:string;
  html_url: string;
}
const repositoryName = 'unform 2';

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/marianohtl/repos').then(response => response.json()).then(data => setRepositories(data));
    console.log(repositories)

  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}

