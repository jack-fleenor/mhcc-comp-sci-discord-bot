import './App.css'
import Assignments from './components/assignments/Assignments';
import UserCard from './components/user/UserCard';

function App() {

  const user = {
    id: 9,
    name: "Joe Dirt",
    discord_handle: "Joe Dirt #231",
    classes: [],
    tutor: false,
    major: 'Computer Science',
    profile_image: 'https://pbs.twimg.com/profile_images/1582829177287241728/xVAE0aGW_400x400.jpg'
  };
  
  return (
    <div className="App">
      <div className="assignments-container">
        <UserCard user={user} />
        <div className="assignments-list">
          <Assignments />
        </div>
      </div>
    </div>
  )
}

export default App
