import { atom } from 'recoil'
import { SortOrder } from 'src/components/SortOrderButton/SortOrderButton'
import { FacetsStore } from '.'

const node = atom<FacetsStore>({
  key: 'Catalog',
  default: {
    topics: [],
    sort: { champion: false, upvote: true, downvote: false },
    sortOrder: SortOrder.ascending,
  },
})

export default node
