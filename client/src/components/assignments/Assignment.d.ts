interface Assignment {
  id: number;
  title: string;
  link: string;
  description: string;
  dueDate: string;
  selected: boolean;
}

type AssignmentProps = {
  updated: boolean,
  selected: boolean,
  assignment: Assignment,
  deleteAssignment: Function,
  updateAssignment: Function
}

type AssignmentActionMenuProps = {
  activeEdit: boolean,
  handleMenuAction: Function
};
