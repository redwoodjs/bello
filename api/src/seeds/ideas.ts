export const ideas = [
  {
    title: 'Dedicated space for deploy targets',
    problem:
      'What would the RedwoodJS gods think of creating Discord channel(s) specifically for individual deployment targets? Seems most of my issues these days are specific to deploying to AWS via Serverless. ',
  },
  {
    title: 'Community module support',
    problem:
      'With the framework growing it seems now important to let the community contribute to it through modules.',
  },
  {
    title: 'i18n support',
    problem:
      'We should decide what features we need/want for translations. I think we can and should do much more than just install a i18n package and provide some basic template.',
  },
  {
    title: 'GraphQL Rest API via SOFA',
    problem:
      'Uri says they are happy to do a proof of concept with Redwood as they have ideas for performance and other improvements to SOFA that they’d like to do.',
  },
  {
    title: 'Containerization the Redwood way',
    problem: 'We need proper docker support',
  },
  {
    title: 'Storybook v12 support',
    problem: 'Storybook v12 support',
  },
  {
    title: 'TS Toolbelt to enhance types in Redwood',
    problem:
      'Special project for typescript lovers that want top notch support with ts-toolbelt.',
  },
  {
    title: 'GraphQL Error Rework using Union Types and in response data',
    problem:
      'Currently makeMergedSchema does not handle union types. Because unions does not have fields, it is filtered out from the function mergeResolversWithServices. Thus there are no resolvers for the union type and an error is thrown',
  },
  {
    title: 'ABAC - Access Based Permissions',
    problem:
      'Dynamic permissions e.g. I buy access to parts of the API. Each model in the graphql API can be bought individually.',
  },
  {
    title: 'SSR/Edge render',
    problem: `Right now in pre-rendering, we always render the page only with the initial bundle (i.e. index.js).
What we want is
Request to /pageTwo → render HTML with the base bundle + the chunk for pageTwo.js
Request to /index → render HTML with base bundle only
Request to /pageThree → render HTML with base bundle + the chunk for pageThree.js`,
  },
  {
    title: 'More Dev Tooling',
    problem: `Other Dev-X tooling
- Time travel Cell debugger
- Click to open component/page
- Hover to show bounds of component`,
  },
]
