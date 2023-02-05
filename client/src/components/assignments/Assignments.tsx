import { useState, useEffect } from 'react';
import axios from 'axios';
import AssignmentCard from './AssignmentCard';
import Form from './Form';

const Assignments = () => {
  const [ assignments, setAssignments ] = useState<Array<Assignment>>([]);
  const [ updated, setUpdated ] = useState<boolean>(false);

  const addAssignment = (assignment: Assignment) : void => postAssignment(assignment);

  const deleteAssignment = (assignment: Assignment) : void => {
    axios.delete(`http://localhost:5174/api/assignment/${assignment.id}`)
    .then((): void => setUpdated(true))
    .catch((error): void => console.log(error));
  }

  const updateAssignment = (assignment: Assignment) : void => {
    axios.patch( `http://localhost:5174/api/assignment/${assignment.id}`, assignment )
    .then((): void => setUpdated(true))
    .catch((error): void => console.log(error));
  }

  const postAssignment = (assignment: Assignment) : void => {
    axios.post( "http://localhost:5174/api/assignment/", assignment )
    .then((): void => setUpdated(true))
    .catch((error): void => console.log(error));
  };

  const getAssignments = (): void => {
    axios.get("http://localhost:5174/api/assignments").then((response) => {
      const assignments: Assignment[] = response.data.data;
      setAssignments(assignments)
    }).catch((error): void => console.log(error));
  }

  useEffect(() => {
    getAssignments();
    if(updated) setUpdated(false);
  }, [ postAssignment, deleteAssignment ]);

  return (
    <div className="assignments-container">
      <div className="assignments-list">
        { assignments && assignments.map((assignment: Assignment): JSX.Element => {
            return <AssignmentCard
              assignment={assignment} 
              deleteAssignment={deleteAssignment} 
              updateAssignment={updateAssignment}
            />
          })
        }
      </div>
      <div className="assignments-menu">
        <Form addAssignment={addAssignment} updated={updated}  />
      </div>
    </div>
  )
}

export default Assignments;