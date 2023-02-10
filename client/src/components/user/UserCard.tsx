import { FaChalkboardTeacher } from "react-icons/fa";

const UserCard = (props: { user: any }) => {
  const { user } = props;

  return (
    <div className="card" style={{width: "400px"}}>
      <div className="header" style={{display: "flex", justifyContent: "space-evenly"}}>
        <div className="user-icon" >
          <img src={user.profile_image} alt={`${user.name}-profile-image`} className="user-icon-img" style={{borderRadius: '15px', width: "75px"}} />
        </div>
        <div className="user-info" style={{textAlign: 'left', paddingLeft: '10px'}}>
          <div>
            { user.name }  <FaChalkboardTeacher/>
          </div>
          <div style={{fontSize: '10px'}}>
            { user.major }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard