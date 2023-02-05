type AssignmentTitleProps = {
  title: string,
  link: string,
  activeEdit: boolean,
  updateField: Function
};

const AssignmentTitle = ({ title, link, activeEdit, updateField }: AssignmentTitleProps): JSX.Element => {
  return activeEdit ? <>
    <label>Title:</label>
    <input 
      style={{ display: "block", width: "100%" }}
      type="text" 
      className="assignment-title" 
      name="title" 
      defaultValue={title}
      onChange={(e) => updateField({ field: "title", value: e.target.value })}
    />
    <label>Link:</label>
    <input 
      style={{ display: "block", width: "100%" }}
      type="text" 
      className="assignment-link" 
      name="link" 
      defaultValue={link}
      onChange={(e) => updateField({ field: "link", value: e.target.value })}
    />
    </> : <a href={ link } target="_blank">
    { title }
  </a>;
}

export default AssignmentTitle