import { roll } from './utils'

describe('Utils', () => {
  it('roll', () => {
    const exclude = { id: 1 }

    const collection = [exclude, { id: 2 }, { id: 3 }, { id: 4 }]

    const result = roll(collection, exclude)

    expect(result).not.toMatchObject(exclude)

    expect(result).not.toHaveProperty('id', exclude.id)
  })
})
