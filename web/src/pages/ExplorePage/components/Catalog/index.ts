import { Topic } from 'types/graphql'

export enum SortOn {
  champion = 'Champions',
  upvote = 'Upvotes',
  downvote = 'Downvotes',
}

export interface SelectTopic extends Pick<Topic, 'id' | 'label'> {
  active: boolean
}

export enum Facets {
  topics = 'topics',
  sort = 'sort',
}

export interface FacetsStore {
  helper: boolean
  topics: Array<SelectTopic>
  sort: Record<SortOn, boolean>
  sortOrder: SortOrder
}
