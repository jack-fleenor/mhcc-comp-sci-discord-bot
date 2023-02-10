interface User {
  id: number;
  name: string;
  discord_handle: string;
  classes: string[];
  tutor: boolean;
  major: string;
  profile_image: string;
}

interface UserClass {
  course_code: string;
  assignments: Assignment[];
  students: User[];
}

interface UserClassArray extends UserClass {
  completed_courses: UserClass[];
}

// TODO: Figure this dumb shit out...
type UserProps = {
  updated: boolean,
  assignment: Assignment,
  deleteAssignment: Function,
  updateAssignment: Function
}

type UserActionMenuProps = {
  activeEdit: boolean,
  handleMenuAction: Function
};
