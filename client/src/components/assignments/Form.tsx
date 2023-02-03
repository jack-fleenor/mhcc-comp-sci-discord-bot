import React from 'react';
import "./Form.css";

interface Assignment{
  field: "title" | "dueDate" | "description" | "link";
  value: string | Date;
}

const Form = (props: { addAssignment: any })  => {
  const { addAssignment } = props;

  const [ assignment, setAssignment ] = React.useState({
    title: null,
    dueDate: null,
    description: null
  });

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addAssignment(assignment)
  }

  const handleUpdate = (_assignment: Assignment) => {
    setAssignment({ ...assignment, [_assignment.field]: _assignment.value });
  }

  return (
    <div className="form-container" style={{textAlign: "left", padding: "5%"}}>
      <div className="form-container-body">
        <form className="assignment-form" onSubmit={(e) => handleSubmit(e)} >
          <div className="title-input">
            <label>Title:</label>
            <input 
              style={{display: "block", width: "90%"}}
              type="text" 
              className="assignment-title" 
              name="title" 
              onChange={(e) => handleUpdate(
                { field: "title", value: e.target.value }
              )}
            />
          </div>
          <div className="link-input">
            <label>Link:</label>
            <input 
              style={{display: "block", width: "90%"}}
              type="text" 
              className="assignment-link" 
              name="link" 
              onChange={(e) => handleUpdate(
                { field: "link", value: e.target.value }
              )}
            />
          </div>
          <div className="dueDate-input">
            <label>Due Date:</label>
            <input 
              style={{display: "block", width: "90%"}}
              type="date" 
              className="assignment-dueDate" 
              name="dueDate" 
              onChange={(e) => handleUpdate(
                { field: "dueDate", value: e.target.value }
              )}
            />
          </div>
          <div className="description-input">
            <label>Description:</label>
            <textarea 
              style={{display: "block", width: "90%"}} 
              onChange={(e) => handleUpdate(
                { field: "description", value: e.target.value }
              )} 
              className="assignment-description" 
              name="description" 
              rows={5}
            />
          </div>
          <button type="submit" className="assignment-form-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form