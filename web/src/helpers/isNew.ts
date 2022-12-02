import dayjs from 'dayjs'

interface Elm {
  createdAt: Date
}

export default function isNew<T extends Elm>(elm: Elm): boolean {
  return elm.createdAt
    ? dayjs(elm.createdAt).isAfter(dayjs().subtract(1, 'week'))
    : false
}
