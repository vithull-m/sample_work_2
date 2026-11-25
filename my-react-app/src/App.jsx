import ProfileCard from './components/ProfileCard.jsx'
import './App.css'

function App() {
  return (
    <div className="team">
      <h1>Our Team</h1>
      <div className="team-members">
        <ProfileCard name="Ava" />
        <ProfileCard name="Noah" />
        <ProfileCard name="Mia" />
      </div>
    </div>
  )
}

export default App
