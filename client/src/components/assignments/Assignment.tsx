import React from 'react';
import "./Assignment.css";

const Assignment = (props: any) => {
  const { assignment, deleteAssignment }  = props;
  const handleClick = () => {
    deleteAssignment(assignment);
  }
  return (
    <div className="assignment-card">
      <div className="assignment-header">
        <div className="assignment-header-title">
          <a href={ assignment.link } target="_blank">
            { assignment.title }
          </a>
        </div>
        <div className="assignment-header-options">
          <button 
            onClick={() => handleClick()} 
            style={{padding: "5px", backgroundColor: "transparent"}}
          >
            :
          </button>
        </div>
      </div>
      <div className="assignment-body">
        <div className="assignment-body-dueDate">
          { assignment.dueDate }
        </div>
        <div className="assignment-body-description">
          { assignment.description }
        </div>
      </div>
    </div>
  )
}

export default Assignment