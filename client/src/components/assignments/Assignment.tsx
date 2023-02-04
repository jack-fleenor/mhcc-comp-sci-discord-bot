import React, { useEffect, useState } from 'react';
import "./Assignment.css";

interface Assignment{
  field: "title" | "dueDate" | "description" | "link";
  value: string | Date;
}

const Assignment = (props: any) => {
  const { assignment, deleteAssignment }  = props;
  const [ activeEdit, setActiveEdit ] = useState<boolean>(false);
  const [ _assignment, setAssignment ] = useState<Assignment>();

  const handleClick = (type: "Edit" | "Delete" | "Cancel") => {
    switch(type) {
      case "Cancel":
        setActiveEdit(false);
        setAssignment(assignment);
        break;
      case "Edit":
        setActiveEdit(true);
        break;
      case "Delete":
        deleteAssignment(assignment)
        break;
    }
  };

  const handleUpdate = (_assignment: Assignment) => {
    setAssignment({ ...assignment, [_assignment.field]: _assignment.value });
  };

  useEffect(() => {
    setAssignment(assignment);
  }, [])

  return (
    <div className="assignment-card">
      <div className="assignment-header">
        <div className="assignment-header-title">
          {
            activeEdit ? 
              <>
                <div className="title-input">
                  <label>Title:</label>
                  <input 
                    style={{display: "block", width: "90%"}}
                    type="text" 
                    className="assignment-title" 
                    name="title" 
                    defaultValue={assignment.title}
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
                    defaultValue={assignment.link}
                    onChange={(e) => handleUpdate(
                      { field: "link", value: e.target.value }
                    )}
                  />
                </div>  
              </> : 
              <a href={ assignment.link } target="_blank">
                { assignment.title }
              </a>
          }
          
        </div>
        <div className="dropdown">
          <button 
            style={{padding: "5px", backgroundColor: "transparent"}}
          >
            :
          </button>
          <div className="dropdown-content">
            {
              activeEdit ? <button onClick={() => handleClick('Cancel')} className="cancel">
                C
              </button> : <button onClick={() => handleClick('Edit')} className="edit">
                E
              </button>
            }
            <button  onClick={() => handleClick('Delete')} className="delete">
              D
            </button>
          </div>
        </div>
      </div>
      <div className="assignment-body">
        {
          activeEdit ? <>
            <div className="dueDate-input">
              <label>Due Date:</label>
              <input 
                style={{display: "block", width: "90%"}}
                type="date" 
                className="assignment-dueDate" 
                name="dueDate" 
                defaultValue={assignment.dueDate}
                onChange={(e) => handleUpdate(
                  { field: "dueDate", value: e.target.value }
                )}
              />
            </div>
            <div className="description-input">
              <label>Description:</label>
              <textarea 
                style={{display: "block", width: "90%"}} 
                defaultValue={assignment.description}
                onChange={(e) => handleUpdate(
                  { field: "description", value: e.target.value }
                )} 
                className="assignment-description" 
                name="description" 
                rows={5}
              />
            </div>
          </> : <>
            <div className="assignment-body-dueDate">
              { assignment.dueDate }
            </div>
            <div className="assignment-body-description">
              { assignment.description }
            </div>
          </>
        }
        {
          activeEdit ? <button>
            Save
          </button> : null
        }
      </div>
    </div>
  )
}

export default Assignment