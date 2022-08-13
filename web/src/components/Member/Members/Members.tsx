import Person, { Variant } from 'src/components/Person/Person'

const MembersList = ({ members }) => {
  return (
    <section className="grid grid-cols-4 gap-4">
      {members.map((member) => (
        <Person
          {...member.user}
          key={`Members - #${member.user.id}`}
          variant={Variant.landscape}
        />
      ))}
    </section>
  )
}

export default MembersList
