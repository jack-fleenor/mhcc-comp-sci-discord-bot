import axios, { AxiosError, AxiosPromise, AxiosResponse } from 'axios';

// Fetching all assignments -------------------------------
export const handleGetAssignments = async (): Promise<AxiosResponse | AxiosError> => {
  const result: AxiosPromise = await getAssignments()
  .then(response => response)
  .catch(error => error);
  return result;
}

export const getAssignments = async (): Promise<AxiosResponse | AxiosError> => {
  const result: AxiosPromise = await axios.get("http://localhost:5174/api/assignments")
  .then(response => response)
  .catch(error => error);
  return result;
}

// Fetch single assignment --------------------------------
export const handleGetAssignment = async (assignment: Assignment): Promise<AxiosResponse | AxiosError> => {
  const result: AxiosPromise = await getAssignment(assignment)
  .then(response => response)
  .catch(error => error);
  return result;
}

export const getAssignment = async (assignment: Assignment): Promise<AxiosResponse | AxiosError> => {
  const result: AxiosPromise = await axios.get(`http://localhost:5174/api/assignments/${assignment.id}`)
  .then(response => response)
  .catch(error => error);
  return result;
}


// Posting new assignments --------------------------------
export const handlePostAssignment = async (assignment: Assignment): Promise<AxiosResponse | AxiosError> => {
  const result: AxiosPromise = await postAssignment(assignment)
  .then(response => response)
  .catch(error => error);
  return result;
};

export const postAssignment = async (assignment: Assignment) : Promise<AxiosResponse | AxiosError> => {
  const result: AxiosResponse | AxiosError = await axios.post("http://localhost:5174/api/assignments/", assignment )
  .then((response: AxiosResponse) => response)
  .catch((error: AxiosError) => error);
  return result;
};

// Deleting Assignments --------------------------------
export const handleDeleteAssignments = async (assignments: Assignment[]): Promise<any> => {
  let errors = <Array<AxiosError>>[];
  assignments.forEach(async (assignment: Assignment) => {
    await deleteAssignment(assignment)
    .catch((error: any) => errors.push(error));
  })
  return errors;
};

// Deleting Assignment --------------------------------
export const handleDeleteAssignment = async (assignment: Assignment): Promise<AxiosResponse | AxiosError> => {
  const result: AxiosResponse | AxiosError  = await deleteAssignment(assignment)
  .catch((error: AxiosError) => error);
  return result;
};

export const deleteAssignment = async (assignment: Assignment) : Promise<AxiosResponse | AxiosError> => {
  const { id } = assignment;
  const result: AxiosResponse | AxiosError  = await axios.delete(`http://localhost:5174/api/assignments/${id}`)
  .then((response: AxiosResponse) => response)
  .catch((error: AxiosError) => error);
  return result;
};

// Updating Assignment --------------------------------
export const handleUpdateAssignment = async (assignment: Assignment): Promise<AxiosResponse | AxiosError>=> {
  const result: AxiosResponse | AxiosError  = await updateAssignment(assignment)
  .catch((error: AxiosError) => error);
  return result;
};

export const updateAssignment = async (assignment: Assignment) : Promise<AxiosResponse | AxiosError>=> {
  const result: AxiosResponse | AxiosError  = await axios.patch(`http://localhost:5174/api/assignments/${assignment.id}`, assignment).then((response: AxiosResponse) => response)
  .catch((error: AxiosError) => error);
  return result;
}
