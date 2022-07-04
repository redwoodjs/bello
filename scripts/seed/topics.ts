import { db } from "$api/src/lib/db"

const topics = [
  "record",
  "generators-&-scaffolds",
  "services",
  "structure-&-vscode-ide",
  "storybook",
  "security",
  "fully-integrated-dx",
  "forms",
  "graphql",
  "logging",
  "ops-&-contributing-dx",
  "mobile",
  "prisma",
  "performance",
  "prerender",
  "router",
  "api",
  "a11y",
  "auth",
  "cells",
  "cli",
  "config",
  "core",
  "webhooks",
  "typescript",
  "testing",
  "web",
  "windows",
  "create-redwood-app",
  "deployment",
]

export default async function () {

  for (let i in topics) {
    const topic = await db.topic.findUnique({ where: { label: topics[i] } })

    if (!topic) {
      await db.topic.create({ data: { label: topics[i], description: topics[i] } })
    }
  }

  console.log("Topics seeded.");


}
