import { validate, validateWith } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import { Idea, MutationResolvers } from 'types/graphql'

export default <MutationResolvers['createIdea']>(
  async function Create({ input }) {
    validate(input.title, 'What is it about?', {
      presence: true,
      length: {
        min: 5,
        max: 150,
        message: 'Please provide a more explicit title',
      },
    })

    validate(input.problem, '', {
      presence: true,
      length: {
        min: 200,
        message:
          'The problem description could be a bit more elaborate. Maybe you can highlight some concrete painpoints you have met?',
      },
    })

    validateWith(() => {
      if (input.topics.length === 0 || input.topics.length > 3) {
        throw new Error('Please select between 1 and 3 topics.')
      }
    })

    return db.idea.create({
      data: {
        title: input.title,
        problem: input.problem,
        solution: input.solution,
        topics: { connect: input.topics.map((id) => ({ id })) },
        author: { connect: { id: context.currentUser.id } },
      },
    })
  }
)
