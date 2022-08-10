import { Idea, Topic, Vote } from 'types/graphql'

export enum SortOn {
  champion = 'champion',
  upvote = 'upvote',
  downvote = 'downvote',
}

export interface SelectTopic extends Pick<Topic, 'id' | 'label'> {
  active: boolean
}

export enum Facets {
  topics = 'topics',
  sort = 'sort',
}

export interface FacetsStore {
  topics: Array<SelectTopic>
  sort: Record<SortOn, boolean>
}
