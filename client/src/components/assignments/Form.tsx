import React, { useEffect } from 'react';
import { BiLink } from 'react-icons/bi';
import "./Form.css";

const Form = (props: { addAssignment: any, updated: boolean }) => {
  const { addAssignment, updated } = props;
  const defaultAssignment = {
    id: 0,
    title: "",
    dueDate: "",
    description: "",
    link: "",
    selected: false
  }
  const [ assignment, setAssignment ] = React.useState<Assignment>(defaultAssignment);
  const [ openHyperLink, setOpenHyperLink ] = React.useState<boolean>(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addAssignment(assignment)
  }

  const handleLink = () => {
    setOpenHyperLink(!openHyperLink)
  };

  useEffect(() => {
    if(updated){
      console.log('REFRESH')
    }
  }, [ updated ])

  const handleUpdate = (_assignment: { field: string, value: string }) => {
    setAssignment({ ...assignment, [_assignment.field]: _assignment.value });
  }

  return (
    <div className="form-container" style={{textAlign: "left", padding: "5%"}}>
      <div className="form-container-body">
        <form id="assignment-form" className="assignment-form" style={{display: "flex"}} onSubmit={(e) => handleSubmit(e)} >
          <div className="first-part" style={{width: "50%"}}>
            <div className="title-input" style={{display: "flex"}} >
              <label>Title:</label>
              <input 
                style={{display: "block"}}
                type="text" 
                className="assignment-title" 
                name="title" 
                value={assignment.title}
                onChange={(e) => handleUpdate(
                  { field: "title", value: e.target.value }
                )}
              />
              <button onClick={() => handleLink()} style={{padding: "0px"}}>
                <BiLink />
              </button>
            </div>
            {
              openHyperLink ? <div className="link-input">
                <label>Link:</label>
                <input 
                  style={{display: "block"}}
                  type="text" 
                  className="assignment-link" 
                  name="link" 
                  value={assignment.link}
                  onChange={(e) => handleUpdate(
                    { field: "link", value: e.target.value }
                  )}
                />
              </div> : null
            }
            <div className="dueDate-input" >
              <label>Due Date:</label>
              <input 
                style={{display: "block"}}
                type="date" 
                className="assignment-dueDate" 
                name="dueDate" 
                value={assignment.dueDate}
                onChange={(e) => handleUpdate(
                  { field: "dueDate", value: e.target.value }
                )}
              />
            </div>
          </div>
          <div className="second-part" style={{display: "50%"}}>
            <div className="description-input" >
              <label>Description:</label>
              <textarea 
                style={{display: "block"}} 
                value={assignment.description}
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
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form