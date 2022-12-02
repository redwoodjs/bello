import _ from 'lodash'

/**
 * Take a sample from a collection while making sure the sample is different from the `exclude`.
 * @param collection
 * @param exclude
 * @param sample
 * @returns
 */
export const roll = (collection, exclude, sample = undefined) => {
  do {
    sample = _.sample(collection)
  } while (_.isEqual(sample, exclude))

  return sample
}
