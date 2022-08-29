import type { APIGatewayEvent, Context } from 'aws-lambda'

import { verifyEvent, WebhookVerificationError } from '@redwoodjs/api/webhooks'

import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info('Invoked githubBot function')

  // Verify that the incoming request did indeed come from the RedwoodJS GitHub bot.
  try {
    verifyEvent('sha256Verifier', {
      event,
      secret: process.env.GITHUB_BOT_WEBHOOK_SECRET,
      options: {
        signatureHeader: 'GitHub-Bot-Signature',
      },
    })
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      logger.warn('Unauthorized')

      return {
        statusCode: 401,
      }
    } else {
      logger.error(error, error.message)

      return {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      }
    }
  }

  logger.info('Webhook verified')

  const payload = JSON.parse(event.body)

  logger.info({
    query: {
      payload,
    },
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'githubBot function',
    }),
  }
}
