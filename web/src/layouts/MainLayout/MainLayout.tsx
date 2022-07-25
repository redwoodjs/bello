import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import Navigation from './components/Menu/Navigation'
import User from './components/Menu/User'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <RecoilRoot>
      <header className="p-4 flex flex-row w-full justify-between items-baseline">
        <Navigation />
        <User />
      </header>
      <section className="h-screen px-[100px]">{children}</section>
    </RecoilRoot>
  )
}

export default MainLayout
