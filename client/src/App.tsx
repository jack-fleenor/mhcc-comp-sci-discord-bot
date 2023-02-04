import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Assignment from './components/assignments/Assignment'
import Form from './components/assignments/Form'
import axios from 'axios';

interface AssignmentT{
  id: any;
  title: string;
  link: string;
  description: string;
  dueDate: Date;
}

function App() {
  const [ assignments, setAssignments ] = useState<Array<AssignmentT>>([]);
  const [ updated, setUpdated ] = useState<boolean>(false);

  const addAssignment = (assignment: any) : void => {
    postAssignment(assignment);
  };

  const deleteAssignment = (assignment: AssignmentT) : void => {
    const { id } = assignment;
    axios.delete(`http://localhost:5174/api/assignment/${id}`)
    .then((response) => {
      setUpdated(true);
      // console.log(response);
    })
    .catch((error) => {
      // console.log(error);
    });
  }

  const postAssignment = (assignment: AssignmentT) : void => {
    const { title, link, dueDate, description } = assignment;
    axios.post("http://localhost:5174/api/assignment/", {
      title: title,
      link: link,
      dueDate: dueDate,
      description: description
    })
    .then((response) => {
      setUpdated(true);
    })
    .catch((error) => {
      // console.log(error);
    });
  };

  const getAssignments = (): void => {
    axios.get("http://localhost:5174/api/assignments").then((response) => {
      const assignments = response.data.data;
      setAssignments(assignments)
    }).catch((error) => {
      // console.log(error);
    })    
  }

  useEffect(() => {
    getAssignments()
    if(updated){
      setUpdated(false);
    }
  }, [ postAssignment, deleteAssignment ]);
  
  return (
    <div className="App">
      <div className="assignments-container">
        <div className="assignments-menu">
          <Form addAssignment={addAssignment} updated={updated} />
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
