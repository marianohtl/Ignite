import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repositoryName = 'unform 2';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
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