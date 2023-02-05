type AssignmentDescriptionProps = {
  description: string,
  activeEdit: boolean,
  updateField: Function
};

const AssignmentDescription = ({ description, activeEdit, updateField }: AssignmentDescriptionProps): JSX.Element => {
  return activeEdit ? <>
    <label>Description:</label>
      <textarea 
        style={{display: "block", width: "90%"}} 
        defaultValue={description}
        onChange={(e) => updateField({ field: "description", value: e.target.value })}
        className="assignment-description" 
        name="description" 
        rows={5}
      />
    </> : <div className="assignment-body-dueDate">
    { description }
  </div>;
}

export default AssignmentDescription;