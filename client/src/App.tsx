import './App.css'
import Assignments from './components/assignments/Assignments';

function App() {
  
  return (
    <div className="App">
      <div className="assignments-container">
        <div className="assignments-list">
          <Assignments />
        </div>
      </div>
    </div>
  )
}

export default App
