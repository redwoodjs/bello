import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { atom, useRecoilState } from 'recoil'

export enum Status {
  welcome = 'welcome',
  identity = 'identity',
  skillset = 'skillset',
  topics = 'topics',
  finish = 'finish',
}

export const Steps: Status[] = [
  Status.welcome,
  Status.identity,
  Status.skillset,
  Status.topics,
  Status.finish,
]

export const node = atom({
  key: 'Process',
  default: { status: Status.welcome, data: {} },
})

const ONBOARD_USER_MUTATION = gql`
  mutation ONBOARD_USER_MUTATION($input: OnboardUserInput!) {
    onboardUser(input: $input) {
      id
      hasOnboarded
    }
  }
`

export default function useProcess() {
  const [state, setState] = useRecoilState(node)

  const [onboardUser] = useMutation(ONBOARD_USER_MUTATION)

  return {
    current: state.status,
    data: state.data,
    next() {
      const current = Steps.indexOf(state.status)

      setState((atom) => ({ ...atom, status: forward(current) }))
    },
    save(data) {
      setState((atom) => {
        return {
          status: forward(Steps.indexOf(atom.status)),
          data: { ...atom.data, ...data },
        }
      })
    },
    async finish() {
      const user = await onboardUser({ variables: { input: state.data } })

      if (user.data.onboardUser.hasOnboarded) {
        navigate(routes.homepage())
      }
    },
  }
}

const forward = (current) => Steps[current + 1] ?? Status.finish
