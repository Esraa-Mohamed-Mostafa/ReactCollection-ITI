import { useState } from "react";


function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
      <div className=" my-5 d-flex justify-content-center align-items-center flex-column">
        <h1>Todo List</h1>
        <div className=" p-5 card " style={{width:'40%'}}>
          <div className="d-flex">
            <input className=" w-100  my-2"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task"
            />
            <button style={{fontSize:'25px'}} className="btn btn-danger  m-2 " onClick={handleAddTask}> + </button>
          </div>
          <div  >
            {tasks.map((task, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center my-2  bg-light p-2"> 
              <div >
                {task}</div>
                <button className="btn btn-warning " onClick={() => handleDeleteTask(index)}>Delete</button>
              </div>))}
          </div>
        </div>
      </div>
  );
}

export default Home;
