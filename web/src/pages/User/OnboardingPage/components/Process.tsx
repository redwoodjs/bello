import Finish from './steps/Finish'
import Identity from './steps/Identity'
import Skillset from './steps/Skillset'
import Topics from './steps/Topics'
import Welcome from './steps/Welcome'
import useProcess, { Status } from './useProcess'

export type Step = React.FC<{ next; save; finish }>

const steps: Record<Status, Step> = {
  welcome: Welcome,
  identity: Identity,
  skillset: Skillset,
  topics: Topics,
  finish: Finish,
}

const Process = () => {
  const { current, next, save, finish, data } = useProcess()
  console.log(data)

  return (
    <section>
      {React.createElement(steps[current], { next, save, finish })}
    </section>
  )
}

export default Process
