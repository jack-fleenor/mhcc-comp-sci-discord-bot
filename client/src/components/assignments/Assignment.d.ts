interface Assignment {
  id: number;
  title: string;
  link: string;
  description: string;
  dueDate: string;
}

type AssignmentProps = {
  updated: boolean,
  assignment: Assignment,
  deleteAssignment: Function,
  updateAssignment: Function
}

type AssignmentActionMenuProps = {
  activeEdit: boolean,
  handleMenuAction: Function
};
