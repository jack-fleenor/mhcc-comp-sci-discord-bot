import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Assignment from './components/assignments/Assignment'
import Form from './components/assignments/Form'
import axios from 'axios';

interface Assignment{
  id: any;
  title: string;
  link: string;
  description: string;
  dueDate: Date;
}

function App() {
  const [ assignments, setAssignments ] = useState<Array<Assignment>>([]);
  
  const addAssignment = (assignment: Assignment) : void => {
    postAssignment(assignment);
  };

  const deleteAssignment = (assignment: Assignment) : void => {
    const { id } = assignment;
    axios.delete(`http://localhost:5174/api/assignment/${id}`)
    .then((response) => {
      // console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const postAssignment = (assignment: Assignment) : void => {
    const { title, link, dueDate, description } = assignment;
    axios.post("http://localhost:5174/api/assignment/", {
      title: title,
      link: link,
      dueDate: dueDate,
      description: description
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const getAssignments = (): void => {
    axios.get("http://localhost:5174/api/assignments").then((response) => {
      const assignments = response.data.data;
      setAssignments(assignments)
    }).catch((error) => {
      console.log(error);
    })    
  }

  useEffect(() => {
    getAssignments()
  }, [ postAssignment, deleteAssignment ]);
  
  return (
    <div className="App">
      <div className="assignments-container">
        <div className="assignments-menu">
          <Form addAssignment={addAssignment}  />
        </div>
        <div className="assignments-list">
          {
           assignments.map(assignment => <Assignment assignment={assignment} deleteAssignment={deleteAssignment} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
