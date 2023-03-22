import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Form from './Form';
import AssignmentCard from './AssignmentCard';
import { 
  handleDeleteAssignment, 
  handleDeleteAssignments, 
  handleGetAssignments, 
  handlePostAssignment, 
  handleUpdateAssignment 
} from '../../api';

const Assignments = () => {
  const [ assignments, setAssignments ] = useState<Array<Assignment>>([]);
  const [ showForm, setShowForm ] = useState<boolean>(false);

  const addAssignment = async (assignment: Assignment) : Promise<void> => {
    const result = await handlePostAssignment(assignment);
    if(result.status === 200) {
      fetchAssignments();
    } else {
      console.error("error: " + result);
    }
  }

  const deleteAssignment = async (assignment: Assignment) : Promise<void> => {
    const result = await handleDeleteAssignment(assignment);
    if(result.status === 200) {
      fetchAssignments();
    } else {
      console.error("error: " + result);
    }
  }

  const deleteAssignments = async (assignments: Assignment[]) : Promise<void> => {
    const result = await handleDeleteAssignments(assignments);
    if(result.length === 0) {
      fetchAssignments();
    } else {
      console.error("error: " + result);
    }
  }

  const updateAssignment = async (assignment: Assignment) : Promise<void> => {
    const result: AxiosResponse | AxiosError = await handleUpdateAssignment(assignment);
    if(result.status === 200) {
      fetchAssignments();
    } else {
      console.error("error: " + result);
    }
  }
  
  const fetchAssignments = async (): Promise<void> => {
    const results: AxiosResponse | AxiosError = await handleGetAssignments();
    if(results.status === 200 && !axios.isAxiosError(results)) {
      const assignments: Assignment[] = results.data.data;
      setAssignments(assignments);
    } else {
      console.error("Error fetching assignments: " + results.status + " " + results);
    }
  }

  const handleShowForm = (e: any): void => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  useEffect(() => {
    fetchAssignments();
  }, [ ])

  useEffect(() => {
  }, [ assignments ]);

  return (
    <div>
      <div className="action-bar">
        <button className="show-form" onClick={(e) => handleShowForm(e)}>
          { showForm ? "Close" :  "Add Assignment" }
        </button>
      </div>
      <div style={{display: showForm ? 'block' : 'none'}}>
        <Form addAssignment={addAssignment} />
      </div>
      <div className="assignments-list" style={{maxHeight: "500px", overflowY: "auto"}}>
        { assignments && assignments.map((assignment: Assignment): JSX.Element => {
            return <AssignmentCard
              selected={false}
              assignment={assignment} 
              deleteAssignment={deleteAssignment} 
              updateAssignment={updateAssignment}
            />
          })
        }
      </div>
    </div>
  )
}

export default Assignments;