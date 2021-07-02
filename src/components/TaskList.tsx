import {  useState , useMemo } from 'react'
import '../styles/tasklist.scss'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

let idCounter = 0;

const id = useMemo(() => () => {return idCounter++} , []);


  function handleCreateNewTask(props : Task) {
    props.id = id();
    props.title = newTaskTitle;
    tasks.push(props);
    setTasks(tasks);
    setNewTaskTitle('');
  }

  function handleToggleTaskCompletion(id: number) {
    let filtered = tasks.map((task) => {
    if(task.id == id && task.isComplete != true)
    {task.isComplete = true} 
    else if(task.id == id ){
    task.isComplete = false;
    }
    return task});
    console.log(filtered);
    setTasks(filtered);
  }

  function handleRemoveTask(id: number) {
    console.log(id)
    let filtered = tasks.filter((task) => task.id != id);
    setTasks(filtered);
}

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}