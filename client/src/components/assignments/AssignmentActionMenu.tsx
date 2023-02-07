import { useState } from "react";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { CiEdit } from 'react-icons/ci';
import { BiSave } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';

type AssignmentActionMenuProps = {
  activeEdit: boolean,
  handleMenuAction: Function
};

const AssignmentActionMenu = ({ activeEdit, handleMenuAction }: AssignmentActionMenuProps): JSX.Element => {
  const [ open, setOpen ] = useState<boolean>(false);

  const handleMenuOpen = (): void => {
    console.log(
      "I'm changing the menu from being: ", 
      open, 
      " to: ", 
      !open
    );
    if(open){
      handleMenuAction("CANCEL")
    }
    setOpen(!open)
  };

  return <div> 
    { open ? <div>
        <button 
          onClick={(): void => handleMenuOpen()} 
          className="cancel"
        >
          <GiCancel />
        </button>
        {
          activeEdit ? <button 
            onClick={(): void => handleMenuAction('SAVE')} 
            className="save"
          >
            <BiSave />
          </button> : <button 
            onClick={(): void => handleMenuAction('EDIT')} 
            className="edit"
          >
            <CiEdit />
          </button>
        }
        <button  
          onClick={(): void => handleMenuAction('DELETE')} 
          className="delete"
        >
          <MdDeleteOutline/>
        </button>
      </div> 
      : <button 
          onClick={() => handleMenuOpen()}
          style={{padding: "5px", backgroundColor: "transparent"}}
        >
          <BsThreeDotsVertical />
        </button>
    }
  </div>
}

export default AssignmentActionMenu;