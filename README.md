# README

Welcome to [RedwoodJS](https://redwoodjs.com)!

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Start by installing dependencies:

```
yarn install
```

Then change into that directory and start the development server:

```
cd my-redwood-project
yarn redwood dev
```

Your browser should automatically open to http://localhost:8910 where you'll see the Welcome Page, which links out to a ton of great resources.

> **The Redwood CLI**
>
> Congratulations on running your first Redwood CLI command!
> From dev to deploy, the CLI is with you the whole way.
> And there's quite a few commands at your disposal:
> ```
> yarn redwood --help
> ```
> For all the details, see the [CLI reference](https://redwoodjs.com/docs/cli-commands).

## Prisma and the database

Consider using local databases:
```shell
sudo -u postgres psql;
# In your client:
CREATE DATABASE bello;
CREATE USER bello WITH ENCRYPTED PASSWORD 'bello' createdb;
GRANT ALL PRIVILEGES ON DATABASE bello TO bello;
```

And now, a database dedicated to tests:
```shell
CREATE DATABASE test_bello;
CREATE USER test_bello WITH ENCRYPTED PASSWORD 'test_bello'  createdb;
GRANT ALL PRIVILEGES ON DATABASE test_bello TO test_bello;
```

## Frontend first with Storybook

Don't know what your data models look like?
That's more than ok—Redwood integrates Storybook so that you can work on design without worrying about data.
Mockup, build, and verify your React components, even in complete isolation from the backend:

```
yarn rw storybook
```

Before you start, see if the CLI's `setup ui` command has your favorite styling library:

```
yarn rw setup ui --help
```

## Testing with Jest

It'd be hard to scale from side project to startup without a few tests.
Redwood fully integrates Jest with the front and the backends and makes it easy to keep your whole app covered by generating test files with all your components and services:

```
yarn rw test
```

To make the integration even more seamless, Redwood augments Jest with database [scenarios](https://redwoodjs.com/docs/testing.md#scenarios)  and [GraphQL mocking](https://redwoodjs.com/docs/testing.md#mocking-graphql-calls).

## Ship it

Redwood is designed for both serverless deploy targets like Netlify and Vercel and serverful deploy targets like Render and AWS:

```
yarn rw setup deploy --help
```

Don't go live without auth!
Lock down your front and backends with Redwood's built-in, database-backed authentication system ([dbAuth](https://redwoodjs.com/docs/authentication#self-hosted-auth-installation-and-setup)), or integrate with nearly a dozen third party auth providers:

```
yarn rw setup auth --help
```

## Next Steps

The best way to learn Redwood is by going through the comprehensive [tutorial](https://redwoodjs.com/docs/tutorial/foreword) and joining the community (via the [Discourse forum](https://community.redwoodjs.com) or the [Discord server](https://discord.gg/redwoodjs)).

## Quick Links

- Stay updated: read [Forum announcements](https://community.redwoodjs.com/c/announcements/5), follow us on [Twitter](https://twitter.com/redwoodjs), and subscribe to the [newsletter](https://redwoodjs.com/newsletter)
- [Learn how to contribute](https://redwoodjs.com/docs/contributing)
