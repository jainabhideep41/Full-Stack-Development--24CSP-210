import Icon from './Icon'

function Header({ username }) {
  return (
    <header>
      <Icon username={username} />
    </header>
  )
}

export default Header