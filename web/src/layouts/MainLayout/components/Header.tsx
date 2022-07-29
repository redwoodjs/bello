import Navigation from './Menu/Navigation'
import User from './Menu/User'

const Header = () => (
  <header className="p-4 flex flex-row w-full justify-between items-baseline">
    <Navigation />
    <User />
  </header>
)

export default Header
