import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Form from './Form';
import AssignmentCard from './AssignmentCard';
import { handleDeleteAssignment, handleDeleteAssignments, handleGetAssignments, handlePostAssignment } from '../../api';

const Assignments = () => {
  const [ assignments, setAssignments ] = useState<Array<Assignment>>([]);
  const [ updated, setUpdated ] = useState<boolean>(false);

  const addAssignment = async (assignment: Assignment) : Promise<void> => {
    const result = await handlePostAssignment(assignment);
    if(result.status === 200) {
      setUpdated(true);
    } else {
      console.error("error: " + result);
    }
  }

  const deleteAssignment = async (assignment: Assignment) : Promise<void> => {
    const result = await handleDeleteAssignment(assignment);
    if(result.status === 200) {
      setUpdated(true);
    } else {
      console.error("error: " + result);
    }
  }

  const deleteAssignments = async (assignments: Assignment[]) : Promise<void> => {
    const result = await handleDeleteAssignments(assignments);
    if(result.length === 0) {
      setUpdated(true);
    } else {
      console.error("error: " + result);
    }
  }

  const updateAssignment = async (assignment: Assignment) : Promise<void> => {
    const result: AxiosResponse | AxiosError = await handleDeleteAssignment(assignment);
    if(result.status === 200) {
      setUpdated(true);
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

  useEffect(() => {
    fetchAssignments();
    if(updated) setUpdated(false);
  }, [ updated ]);

  return (
    <div>
      <div>
        <Form addAssignment={addAssignment} updated={updated}  />
      </div>
      <div className="assignments-list" style={{maxHeight: "500px", overflowY: "auto"}}>
        { assignments && assignments.map((assignment: Assignment): JSX.Element => {
            return <AssignmentCard
              selected={false}
              updated={updated}
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