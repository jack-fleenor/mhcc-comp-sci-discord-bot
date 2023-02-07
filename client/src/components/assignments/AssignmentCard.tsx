import { useState } from 'react';
import AssignmentTitle from './AssignmentTitle';
import AssignmentDueDate from './AssignmentDueDate';
import AssignmentActionMenu from './AssignmentActionMenu';
import AssignmentDescription from './AssignmentDescription';
import "./Assignment.css";

type AssignmentProps = {
  assignment: Assignment,
  deleteAssignment: Function,
  updateAssignment: Function
}

enum AssignmentKeys {
  Title = "title",
  Link = "link",
  Description = "description",
  DueDate = "dueDate"
}

enum MenuActions {
  Edit = "EDIT",
  Save = "SAVE",
  Delete = "DELETE",
  Cancel = "CANCEL"
}

const AssignmentCard = (props: AssignmentProps): JSX.Element => {
  const { assignment, deleteAssignment, updateAssignment } = props;
  const [ activeEdit, setActiveEdit ] = useState<boolean>(false);
  const [ localAssignment, setLocalAssignment ] = useState<Assignment>(assignment);

  const handleMenuAction = (action: MenuActions) => {
    switch(action) {
      case MenuActions.Edit:
        setActiveEdit(true);
        break;
      case MenuActions.Save:
        console.log(localAssignment);
        updateAssignment(localAssignment);
        break;
      case MenuActions.Delete:
        deleteAssignment(assignment)
        break;
      case MenuActions.Cancel:
        setActiveEdit(false);
        setLocalAssignment(assignment);
        break;
      default:
        setActiveEdit(false);
        setLocalAssignment(assignment);
    }
  };

  const updateField = ( key: AssignmentKeys, value: string ) => {
    console.log(key, value);
    console.log(localAssignment);
    const tempAssignment = { ...localAssignment, [key]: value };
    console.log(tempAssignment);
    setLocalAssignment(tempAssignment);
  };

  return (
    <div className="assignment-card">
      <div className="assignment-header">
        <div className="assignment-header-title">
          <AssignmentTitle 
            title={localAssignment ? localAssignment.title : "No Title" }
            link={localAssignment ? localAssignment.link : "No Link" }
            activeEdit={activeEdit}
            updateField={updateField}
          /> 
        </div>
        <div className="action-menu">
          <AssignmentActionMenu 
            activeEdit={activeEdit} 
            handleMenuAction={handleMenuAction}
          />
        </div>
      </div>
      <div className="assignment-body">
        <AssignmentDueDate 
          dueDate={ localAssignment ? localAssignment.dueDate : "No Due Date" }
          activeEdit={activeEdit}
          updateField={updateField}
        />
        <AssignmentDescription
          description={ localAssignment ? localAssignment.description : "No Description" }
          activeEdit={activeEdit}
          updateField={updateField}
        />
      </div>
    </div>
  )
}

export default AssignmentCard