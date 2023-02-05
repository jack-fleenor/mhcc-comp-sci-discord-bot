type AssignmentDueDateProps = {
  dueDate: string,
  activeEdit: boolean,
  updateField: Function
};

const AssignmentDueDate = ({ dueDate, activeEdit, updateField }: AssignmentDueDateProps): JSX.Element => {
  return activeEdit ? <>
    <label>Due Date:</label>
    <input 
      style={{display: "block", width: "90%"}}
      type="date" 
      className="assignment-dueDate" 
      name="dueDate" 
      defaultValue={dueDate}
      onChange={(e) => updateField(
        { field: "dueDate", value: e.target.value }
      )}
    />
    </> : <div className="assignment-body-dueDate">
      { dueDate }
    </div>;
}

export default AssignmentDueDate;