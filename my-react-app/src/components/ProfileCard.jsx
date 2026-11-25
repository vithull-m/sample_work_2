import react from 'react';
import './ProfileCard.css'

function ProfileCard({ name }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Team Member</p>
    </div>
  )
}

export default ProfileCard
