import { atom } from 'recoil'
import { FacetsStore } from '.'

const node = atom<FacetsStore>({
  key: 'Catalog',
  default: {
    topics: [],
    sort: { champion: false, upvote: true, downvote: false },
  },
})

export default node
