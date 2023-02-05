import { useState } from "react";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';

type AssignmentActionMenuProps = {
  activeEdit: boolean,
  handleMenuAction: Function
};

const AssignmentActionMenu = ({ activeEdit, handleMenuAction }: AssignmentActionMenuProps): JSX.Element => {
  const [ open, setOpen ] = useState<boolean>(false);

  const handleMenuOpen = (): void => setOpen(!open);

  return <div className="dropdown">
    <button 
      onClick={() => handleMenuOpen()}
      style={{padding: "5px", backgroundColor: "transparent"}}
    >
      { 
        activeEdit ? <GiCancel /> : <BsThreeDotsVertical /> 
      }
    </button>
    {
      open ? <div className="dropdown-content">
        <button onClick={() => handleMenuAction('Edit')} className="edit">
          <CiEdit />
        </button>
        <button  onClick={() => handleMenuAction('Delete')} className="delete">
          <MdDeleteOutline/>
        </button>
      </div> : null
    }
  </div>
}

export default AssignmentActionMenu;