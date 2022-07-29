import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import Footer from './components/Footer'
import Header from './components/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <RecoilRoot>
      <Header />
      <section className=" px-4 md:px-[100px]">{children}</section>
      <Footer />
    </RecoilRoot>
  )
}

export default MainLayout
