import UserProfile from './UserProfile'

function Icon({ username }) {
  return (
    <div className="icon">
      <UserProfile username={username} />
    </div>
  )
}

export default Icon