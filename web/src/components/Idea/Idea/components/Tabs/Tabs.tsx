import { Tabs as MantineTabs } from '@mantine/core'
import { Link } from '@redwoodjs/router'
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconGitPullRequest,
  IconVocabulary,
} from '@tabler/icons'
import DiscourseIcon from 'src/components/Icons/Discourse'

const referenceIcons = {
  chat: <IconBrandDiscord />,
  conversation: <DiscourseIcon className="w-[24px] text-gray-600" />,
  main: <IconGitPullRequest />,
  specs: <IconVocabulary />,
}

const Reference = ({ label, icon, to }) => (
  <Link className="mt-2" to={'to'}>
    <div className="flex flex-col items-center">
      <p>{label}</p>
      {icon}
    </div>
  </Link>
)

const Tabs = ({ idea }) => (
  <MantineTabs className="mt-10" defaultValue="reference">
    <MantineTabs.List position="apart" grow>
      <MantineTabs.Tab value="reference">Reference</MantineTabs.Tab>
      <MantineTabs.Tab value="interest">Interest</MantineTabs.Tab>
      <MantineTabs.Tab value="evidences">Evidences</MantineTabs.Tab>
    </MantineTabs.List>
    <MantineTabs.Panel value="reference">
      <div className="flex flex-row w-full pt-6 m-auto md:w-2/3 justify-between text-gray-600">
        {!idea?.chat && (
          <Reference
            to={idea.chat}
            icon={referenceIcons.chat}
            label="Discord"
          />
        )}
        {!idea?.conversation && (
          <Reference
            to={idea.conversation}
            icon={referenceIcons.conversation}
            label="Discourse"
          />
        )}
        {!idea?.main && (
          <Reference to={idea.main} icon={referenceIcons.main} label="PR" />
        )}
        {!idea?.specs && (
          <Reference
            to={idea.specs}
            icon={referenceIcons.specs}
            label="Specifications"
          />
        )}
      </div>
    </MantineTabs.Panel>
    <MantineTabs.Panel value="interest">Interest</MantineTabs.Panel>
    <MantineTabs.Panel value="evidences">Evidences</MantineTabs.Panel>
  </MantineTabs>
)

export default Tabs
