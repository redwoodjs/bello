import { db } from 'src/lib/db'
import dayjs from 'dayjs'

const LATEST_COUNT = 6

const THRESHOLD = dayjs().subtract(1, 'week').toDate()

export default async function Latest() {
  return db.idea.findMany({
    where: { createdAt: { gte: THRESHOLD } },
    take: LATEST_COUNT,
    select: {
      id: true,
      createdAt: true,
      title: true,
      problem: true,
      topics: { select: { id: true, label: true } },
    },
  })
}
