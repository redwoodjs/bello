import EditBusinessEntityCell from 'src/components/BusinessEntity/EditBusinessEntityCell'

type BusinessEntityPageProps = {
  id: number
}

const EditBusinessEntityPage = ({ id }: BusinessEntityPageProps) => {
  return <EditBusinessEntityCell id={id} />
}

export default EditBusinessEntityPage
