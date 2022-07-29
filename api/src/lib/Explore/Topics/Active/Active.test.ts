import Active from './Active'

describe('Explore - Topics - Active', function () {
  scenario('Should return 3 topics', async function (scenario) {
    const topics = await Active()

    expect(topics).toHaveLength(3)
  })

  it.skip('Should return 3 topics from the last 3 ideas updated', async function (scenario) {})
})
