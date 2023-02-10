import { useEffect, useState } from 'react';
import AssignmentTitle from './AssignmentTitle';
import AssignmentDueDate from './AssignmentDueDate';
import AssignmentActionMenu from './AssignmentActionMenu';
import AssignmentDescription from './AssignmentDescription';
import "./Assignment.css";

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
  const { updated, assignment, deleteAssignment, updateAssignment, selected } = props;
  const [ activeEdit, setActiveEdit ] = useState<boolean>(false);
  const [ localAssignment, setLocalAssignment ] = useState<Assignment>(assignment);

  const handleMenuAction = (action: MenuActions) => {
    switch(action) {
      case MenuActions.Edit:
        setActiveEdit(true);
        break;
      case MenuActions.Save:
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

  const updateField = (key: AssignmentKeys, value: string): void => setLocalAssignment(
    { ...localAssignment, [key]: value }
  );

  useEffect(() => setActiveEdit(false), [ updated ]);

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