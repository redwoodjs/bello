import { RecoilRoot } from 'recoil'

type EmptyLayoutProps = {
  children?: React.ReactNode
}

const EmptyLayout = ({ children }: EmptyLayoutProps) => {
  return (
    <RecoilRoot>
      <main className="h-screen m-auto w-full md:w-2/3 max-w-2xl flex flex-col justify-center align-middle justify-items-center">
        {children}
      </main>
    </RecoilRoot>
  )
}

export default EmptyLayout
