import { useParams } from '@redwoodjs/router'
import Person, { Variant } from 'src/components/Person/Person'
import { IconBroadcast } from '@tabler/icons'
import { useAuth } from '@redwoodjs/auth'
import { Badge } from '@mantine/core'
import Divider from 'src/components/Divider/Divider'
import { Box, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react'

const User = ({ user }) => {
  const { currentUser } = useAuth()

  const params = useParams()

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <header className="">
          <Person {...user} variant={Variant.portrait} />
        </header>
      </section>
      <aside className="flex flex-col py-4 justify-center items-center">
        {currentUser?.id !== parseInt(params.id) && (
          <button
            type="button"
            className="text-gray-500 flex flex-row items-center border-gray-700"
          >
            <IconBroadcast className="mr-1" />
            <span>follow</span>
          </button>
        )}
        <div className=" mt-4 flex flex-row flex-wrap">
          <div className="px-2 py-[.1rem] rounded border w-fit text-white bg-black font-bold uppercase text-xs">
            {user.strength.label}
          </div>
          {user.skillSets.map((skillSet) => (
            <Badge className="ml-2">{skillSet.label}</Badge>
          ))}
        </div>
        <div className="mt-4 flex flex-row flex-wrap">
          {user.topics.map((topic) => (
            <Badge color="yellow">{topic.label}</Badge>
          ))}
        </div>
      </aside>
      <article className="p-2 lg:w-1/2 m-auto mt-16">
        <h1>{user.member.title}</h1>
        <p>{user.member.description}</p>
      </article>
      <Divider />
      <Grid templateColumns={'repeat(2,1fr)'} gap={4}>
        {user?.recommendations?.map(({ text, businessEntity: { label } }) => (
          <GridItem
            border="1px solid"
            borderColor="vapor"
            borderRadius={8}
            p={4}
          >
            <Text fontSize={12}>{text}</Text>
            <HStack justifyContent="flex-end" mt={4}>
              <Text
                bgColor="vapor"
                p={2}
                color="white"
                fontWeight={800}
                fontSize={14}
              >
                {label}
              </Text>
            </HStack>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default User
